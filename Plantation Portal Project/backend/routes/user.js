const router = require("express").Router();
let { User } = require("../models/user.model");

router.route("/add").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phno = req.body.phno;
  const type = req.body.type;

  const newUser = new User({
    email,
    password,
    fname,
    lname,
    phno,
    type,
  });

  const user = await newUser.save();
  return res.status(200).json(user);
});

router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.status(200).send({ message: "login sucess", user: user });
      } else {
        res.status(201).send({ message: "wrong credentials" });
      }
    } else {
      res.status(201).send("not register");
    }
  });
});

module.exports = router;
