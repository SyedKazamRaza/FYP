const router = require('express').Router();
let User = require('../models/user.model');

router.route('/add').post((req, res) => {
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
      type
    });
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"login sucess",user:user})
            }else{
                res.send({message:"wrong credentials"})
            }
        }else{
            res.send("not register")
        }
    })
});

  module.exports = router;
  