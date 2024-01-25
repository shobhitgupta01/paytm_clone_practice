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
    req.body = response.data;
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
    req.body = response.data;
    next();
  }
  else {
    res.status(411).json({
      message: "Error while logging in"
    });
    return;
  }
}

function validateUserUpdate(req, res, next){
  const updateBody = zod.object({
    password: zod.string().optional(),
      firstName: zod.string().optional(),
      lastName: zod.string().optional(),
  });
  const response = updateBody.safeParse(req.body);
  if(!response.success){
    return res.status(411).json({
      message: "Error while updating information"
    });
  }
  else{
    req.body = response.data;
    next();
  }
}

module.exports = {
  validateSignup,
  validateLogin,
  validateUserUpdate
}
