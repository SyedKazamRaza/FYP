const router = require("express").Router();
let User = require("../models/user.model");
var ObjectId = require("mongodb").ObjectID;

router.route("/").get((req, res) => {
  User.find()
    .then((Users) => res.json(Users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/getLoginUser/:userid", async (req, res) => {
  const userid = req.params.userid;
  const loginUser = await User.findById(userid);
  res.status(200).json(loginUser);
});

router.post("/updateUser", async (req, res) => {
  try {
    const userid = req.body.userid;
    const first = req.body.fname;
    const last = req.body.lname;
    const phone = req.body.phno;
    const email = req.body.email;
    const pass = req.body.password;

    const result = await User.updateOne(
      { _id: userid },
      {
        $set: {
          fname: first,
          lname: last,
          phno: phone,
          password: pass,
          email: email,
        },
      }
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

// router.route('/add').post(async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     const fname = req.body.fname;
//     const lname = req.body.lname;
//     const phno = req.body.phno;
//     const type = req.body.type;

//     const newUser = new User({
//       email,
//       password,
//       fname,
//       lname,
//       phno,
//       type
//     });

//     const user = await newUser.save()
//     return res.status(200).json(user);
// });

// router.route("/login").post((req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.status(200).json({ message: "login sucess", user: user })
//         //res.status(200).send({ message: "login sucess", user: user });
//       } else {
//         res.status(201).json({message: "wrong credentials", user: user })
//         //res.status(201).send({ message: "wrong credentials" });
//       }
//     } else {

//       //res.status(201).send("not register");
//       res.status(201).json("not register");
//     }
//   });
// });

module.exports = router;
