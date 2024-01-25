const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Require and configure dotenv
require('dotenv').config();

// Access your API key
const mongo_url = process.env.MONGO_URL;
db_name = 'paytm'

async function connectDB() {
  await mongoose.connect(`${mongo_url}/${db_name}`);
}

connectDB().catch(err => console.log(err));


// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },

});

// Method to generate a hash from plain text
userSchema.methods.createHash = async function(plainTextPassword) {

  // Hashing user's salt and password with 10 iterations,
  const saltRounds = 10;

  // First method to generate a salt and then create hash
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(plainTextPassword, salt);

  // Second mehtod - Or we can create salt and hash in a single method also
  // return await bcrypt.hash(plainTextPassword, saltRounds);
};

// Validating the candidate password with stored hash and hash function
userSchema.methods.validatePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Accounts Schema
const AccountsSchema = new mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required : true
  },
  balance : {
    type: Number,
    required: true
  }
});


// models
const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', AccountsSchema);

module.exports = {
  User,
  Account
}
