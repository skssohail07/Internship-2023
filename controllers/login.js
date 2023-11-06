const Signup = require("../models/Signup");
const login = async (req, res) => {
  // Rest of your login route code...
  const { username, password } = req.body;

  console.log(username + "" + password);
  const user = await Signup.findOne({ username });
  if (user && password == user.password) {
    return res.redirect("/");
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
};

module.exports = { login };
