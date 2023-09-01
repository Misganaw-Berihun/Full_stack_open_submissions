const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const blogsRouter = require('./controllers/blogs');
const logger = require('./utils/logger');
const config = require('./utils/config');
const middleware = require('./utils/middleware');

mongoose.set('strictQuery', false);
logger.info('connecting to' , config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('MongoDB connected Successfully');
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB');
    logger.error(error.message);
  });

const app = express();
app.use(cors());
app.use(express.static('build'));
app.use(middleware.requestLogger);
app.use(express.json());

app.use('/api/blogs', blogsRouter);

app.use(middleware.unknownEndPoint);
app.use(middleware.errorHandler);

module.exports = app;
