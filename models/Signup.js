const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Signup = new mongoose.model("Signup", signupSchema);
module.exports = Signup;
