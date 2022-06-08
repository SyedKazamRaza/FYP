const mongoose = require("mongoose");
const { Users } = require("./user.model");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  orderStatus: { type: String, required: true },
  dateTime: { type: String, required: true },
  totalBill: { type: Number, required: true },
  productsDetail: { type: Array, required: true },
  servicesDetails: {type: Array, required: true},
  billingAddress:{ type: Object, required: true },
  paymentMethod:  { type: String, required: true },
  shippingDetails:  { type: Object, required: true },
});

const Order = mongoose.model("Order", orderSchema);
module.exports.Order = Order;
