const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const AuthorizationError = require('../errors/authorization-error');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new AuthorizationError('Необходима авторизация');
  }

  req.user = payload;

  next();
};

module.exports = auth;
