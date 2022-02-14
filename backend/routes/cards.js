const router = require('express').Router();
const { validateCard, validateIdCard } = require('../middlewares/requestValidation');
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validateCard, createCard);
router.delete('/:id', validateIdCard, deleteCard);
router.put('/:id/likes', validateIdCard, likeCard);
router.delete('/:id/likes', validateIdCard, dislikeCard);

module.exports = router;
