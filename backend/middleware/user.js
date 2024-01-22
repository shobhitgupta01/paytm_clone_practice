const { response } = require('express');
const zod = require('zod');

function validateSignup(req, res, next) {
  const schema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
  });

  response = schema.safeParse(req.body);

  if (response.success) {
    next();
  }
  else {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs"
    });
  }
}


module.exports = {
  validateSignup
}
