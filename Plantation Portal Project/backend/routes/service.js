const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
  console.log(req.session)
  Service.find()
    .then(Service => {res.json(Service)
    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/:id').get((req, res) => {
  Service.findById(req.params.id)
    .then(Service => res.json(Service))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  
  var image;
  Service.findById(req.params.id)
  .then(Services => {image=Services.s_image}) 
  Service.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log('Service deleted.')
    res.json(image)
  })
  .catch(err => res.status(400).json('Error: ' + err));
  }
 
);

router.route('/add').post(async (req, res) => {
  const s_title = req.body.s_title;
  const s_price = req.body.s_price;
  const s_details = req.body.s_details;
  const s_image =req.body.s_image;

  const newService = new Service({
    s_title,
    s_price,
    s_details,
    s_image
  });
  console.log("Hi"+newService)

  await newService.save() 
  .then(() => res.json('Service added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
  const s_title = req.body.s_title;
  const s_price = req.body.s_price;
  const s_details = req.body.s_details;
  const s_image =req.body.s_image;

  const newService = new Service({
    s_title,
    s_price,
    s_details,
    s_image
  });
  console.log("Hi"+newService)
  Service.findByIdAndUpdate(req.params.id, {$set: {s_title : s_title, s_price: s_price, s_details: s_details, s_image:s_image}})
  .then(() => {res.json('Service updated!')
    console.log("res")})
  .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;