const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');
const BadRequestError = require('../errors/bad-request-err');

// получение всех карт
module.exports.getCards = (req, res, next) => {
  Card
    .find({})
    .then((cards) => res.status(200).send(cards))
    .catch(next);
};

//  создание карточки
module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card
    .create({ name, link, owner })
    .then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else { next(err); }
    });
};

// удаление карточки
module.exports.deleteCard = (req, res, next) => {
  Card
    .findById(req.params.id)
    .orFail(new NotFoundError('Карточка не найдена'))
    .then((card) => {
      if (card.owner.toString() === req.user._id) {
        card.remove()
          .then((removeCard) => res.send(removeCard));
      } else {
        throw new ForbiddenError('Попытка удалить чужую карточку');
      }
    })
    .catch(next);
};

// добавить лайк карточки
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NotFoundError('Карточка не найдена'))
    .then((card) => {
      res.send({ data: card });
    })
    .catch(next);
};

// удалить лайк у карточки
module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NotFoundError('Карточка не найдена'))
    .then((card) => {
      res.send({ data: card });
    })
    .catch(next);
};
