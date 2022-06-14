const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
  Blog.find()
    .then(Blogs => res.json(Blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log("Blogs")
  Blog.findById(req.params.id)
    .then(Blog => {
     
      res.json(Blog)

    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const image =req.body.image;

  const newBlog = new Blog({
    title,
    content,
    image
  });

  await newBlog.save() 
  .then(() => res.json('Blog added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  
  var image;
  Blog.findById(req.params.id)
  .then(Blogs => {image=Blogs.image}) 
  Blog.findByIdAndDelete(req.params.id)
  .then(() => {
    console.log('Blog deleted.')
    res.json(image)
  })
  .catch(err => res.status(400).json('Error: ' + err));
  }
 
);

router.route('/update/:id').post(async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const image =req.body.image;


  const newBlog = new Blog({
    title,
    content,
    image
  });
  console.log("Hi"+newBlog)
  Blog.findByIdAndUpdate(req.params.id, {$set: {title : title, content: content, image: image}})
  .then(() => {res.json('Blog updated!')
    console.log("res")})
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;