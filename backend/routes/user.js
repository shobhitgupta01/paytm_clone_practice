const express = require("express");
const { User, Account } = require("../db");
const {
  validateSignup,
  validateLogin,
  validateUserUpdate,
} = require("../middleware/user");
const { authMiddleware } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router();

router.put("/", authMiddleware, validateUserUpdate, async (req, res) => {
  const user = await User.findOne({ _id: req.userId });
  if (!user || Object.keys(req.body).length === 0) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  if ("password" in req.body) {
    let hashedPassword = await user.createHash(req.body.password);
    req.body.password = hashedPassword;
  }

  //updating
  try {
    await User.updateOne({ _id: req.userId }, req.body);
  } catch (error) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  return res.json({
    message: "Updated successfully",
  });
});

router.post("/signup", validateSignup, async (req, res) => {
  const userData = req.body;

  const existingUser = await User.findOne({
    username: userData.username,
  });

  if (existingUser) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
    return;
  }

  const newUser = new User({
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  var hashedPassword = await newUser.createHash(userData.password);
  newUser.password = hashedPassword;

  const user = await newUser.save();

  const userId = user._id;

  //initialising balance
  const balance = Math.floor(1 + Math.random() * 9999);
  const newAccount = new Account({
    userId: userId,
    balance: balance * 100,
  });

  await newAccount.save();

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/login", validateLogin, async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user && (await user.validatePassword(req.body.password))) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      jwt: token,
    });
    return;
  } else {
    res.status(411).json({
      message: "Error while logging in",
    });
    return;
  }
});

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";
  try {
    const userList = await User.find({
      $and: [
        {
          $or: [
            {
              firstName: {
                $regex: filter,
                $options: "i",
              },
            },
            {
              lastName: {
                $regex: filter,
                $options: "i",
              },
            },
          ],
        },
        {
          '_id':{$ne: req.userId}
        }
      ],
    });
    return res.json({
      users: userList.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    return res.status(411).json({
      message: "Error while getting information",
    });
  }
});

router.get("/details", authMiddleware, async (req, res) => {
  const user = await User.findOne({ _id: req.userId });
  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }
  res.json({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    _id: user._id,
  });
});

module.exports = router;
