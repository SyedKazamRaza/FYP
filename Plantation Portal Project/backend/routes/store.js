const router = require('express').Router();
let Store = require('../models/storeModel');

router.route('/').get((req, res) => {
  Store.find()
    .then(Stores => res.status(200).json(Stores))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/approvedStores').get((req, res) => {
  Store.find({status: "approved"})
    .then(Stores => res.status(200).json(Stores))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Store.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log('Service deleted.')
    res.status(200).json('Service deleted.');
  })
  .catch(err => res.status(400).json('Error: ' + err));
  }
 
);

router.route('/update/:id').post(async (req, res) => {

  Store.findByIdAndUpdate(req.params.id, {$set: {status : "approved"}})
  .then(() => {res.status(200).send('Store Created')
    console.log("res")})
  .catch(err => res.status(400).json('Error: ' + err));
});


// router.route("/login").post((req, res) => {
//   const username = req.body.email;
//   const password = req.body.password;

//   Store.findOne({ username: username }, (err, user) => {
//     if (user) {
//       console.log("Hello")
//       console.log(user)
//       if (password === user.password) {
//         res.status(200).json({ message: "login sucess", user: user });
//       } else {
//         res.status(201).json({ message: "wrong credentials" });
//       }
//     } else {
//       res.status(201).json("not register");
//     }
//   });
// });  

// router.route('/add').post(async (req, res) => {
//     const username = req.body.email;
//     const password = req.body.password;
//     const storeName = req.body.store;
//     const phno = req.body.phno;
//     const totalEarning = 0;
//     const ordersCompleted = 0;
//     const status = "pending";
  
//     const newStore = new Store({
//       username,
//       password,
//       storeName,
//       phno,
//       totalEarning,
//       ordersCompleted,
//       status
      
//     });
  
//     const store = await newStore.save()
//     return res.status(200).json(store);
// });

module.exports = router;