const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  s_title: { type: String, required: true },
  s_details: { type: String, required: true },
  s_image: { type: String, required: true },
  s_price: {type: Number, required: true }
}, {
  timestamps: true,
})

const service = mongoose.model('service', serviceSchema);

module.exports = service;