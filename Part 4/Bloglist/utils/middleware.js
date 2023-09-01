const {info, error} = require('./logger');

const requestLogger = (req, res, next) => {
  info('Method', req.method);
  info('Path:', req.path);
  info('Body', JSON.stringify(req.body));
  info('---');
  next();
};

const unknownEndPoint = (req, res) => {
  res.status(404).send({error: 'unknown endpoint'});
};


const errorHandler = (err, req, res, next) => {
  error(err.message);

  if (err.name === 'CastError'){
    return res.status(400).send({error: 'malformatted id'});
  } else if (error.name === 'ValidationError'){
    return res.status(400).send({error: error.message});
  }

  next(err);
};


module.exports = {
  requestLogger,
  unknownEndPoint,
  errorHandler
};
