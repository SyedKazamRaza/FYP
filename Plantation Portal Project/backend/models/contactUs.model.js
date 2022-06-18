const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, required: true },
});

const Messages = mongoose.model("message", messagesSchema);

module.exports.Messages = Messages;
