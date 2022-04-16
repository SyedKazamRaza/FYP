const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true }
}, {
  timestamps: true,
});

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;