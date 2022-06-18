const router = require("express").Router();
const { Messages } = require("../models/contactUs.model");

router.post("/addNewMessage", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      message: req.body.msg,
      status: req.body.status
    };
    let newMessage = new Messages(data);
    const msg = await newMessage.save();
    return res.status(200).json(msg);
  } catch (err) {
    console.log(err);
  }
});

module.exports.contactRouter = router;
