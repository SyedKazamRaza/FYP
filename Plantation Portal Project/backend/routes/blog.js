const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
  Blog.find()
    .then(Blogs => res.json(Blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then(Blogs => res.json(Blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;