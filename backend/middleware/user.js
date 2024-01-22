const zod = require('zod');

function validateSignup(req, res, next) {
  const schema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
  });

  const response = schema.safeParse(req.body);

  if (response.success) {
    next();
  }
  else {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    });
    return;
  }
}

function validateLogin(req, res, next) {
  const schema = zod.object({
    username: zod.string().email(),
    password: zod.string()
  });

  const response = schema.safeParse(req.body);

  if (response.success) {
    next();
  }
  else {
    res.status(411).json({
      message: "Error while logging in"
    });
    return;
  }
}


module.exports = {
  validateSignup,
  validateLogin
}
