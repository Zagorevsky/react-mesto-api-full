require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/error-handler');
const { PORT, DB_ADDRESS } = require('./config');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const corsHandler = require('./middlewares/allowedCors');

const app = express();
mongoose.connect(DB_ADDRESS, () => {
  console.log('База данных подключена');
});

const { login, createUser } = require('./controllers/users');
const { validateUser } = require('./middlewares/requestValidation');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-err');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(corsHandler);
app.use(requestLogger);

app.post('/signin', validateUser, login);
app.post('/signup', validateUser, createUser);

app.use('/users', auth, require('./routes/users'));
app.use('/cards', auth, require('./routes/cards'));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.use('/', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});
