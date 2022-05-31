const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  phno: { type: String, required: true },
  type: { type: String, required: true },
});

const Users = mongoose.model('user', userSchema);

module.exports.User = Users;
