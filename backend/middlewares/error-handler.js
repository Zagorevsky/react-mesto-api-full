const errorHandler = ((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.status === 500 ? 'Ошибка сервера' : err.message });
  next();
});

module.exports = errorHandler;
