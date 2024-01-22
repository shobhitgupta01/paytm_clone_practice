const express = require("express");
const { User } = require('../db');
const { validateSignup } = require('../middleware/user');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const router = express.Router()

router.post('/signup', validateSignup, async (req, res) => {

  const userData = req.body;

  const existingUser = await User.findOne({
    username: userData.username
  });

  if (existingUser) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    });
  }

  const newUser = new User({
    username: userData.username,
    firstName: userData.firstName,
    lastName: userData.lastName
  });

  var hashedPassword = await newUser.createHash(userData.password);
  newUser.password = hashedPassword;

  const user = await newUser.save();

  const userId = user._id;

  const token = jwt.sign({
    userId
  }, JWT_SECRET);

  res.json({
    message: "User created successfully",
    token: token
  });
})

module.exports = router;
