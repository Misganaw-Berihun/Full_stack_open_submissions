const blogsRouter = require('express').Router();
const logger = require('../utils/logger');
const Blog = require('../models/blog');

blogsRouter.get('/', (req, res) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    });
});

blogsRouter.post('/', (req, res, next) => {
  logger.info('inside post router of blogpost');
  const body = req.body;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  });

  logger.info(blog);
  blog.save()
    .then((blog) => {
      res.status(201).json(blog);
    })
    .catch((error) => next(error));
});


blogsRouter.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Blog.findById(id)
    .then((result) => {
      if (result){
        res.json(result);
      } else{
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

blogsRouter.put('/:id', (req, res, next) => {
  const {id} = req.params;
  logger.info('PUT: id: ', id);
  const {title, author, url, likes} = req.body;
  const blog = {
    title,
    author,
    url,
    likes
  };

  Blog.findByIdAndUpdate(id, blog, {new: true})
    .then((updatedResult) => {
      res.json(updatedResult);
    })
    .catch((error) => next(error));
});

blogsRouter.delete('/:id', (req, res, next) => {
  const {id} = req.params;

  Blog.findByIdAndRemove(id)
    .then((blog) => {
      return res.status(201).json(blog);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
