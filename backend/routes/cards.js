const router = require('express').Router();
const { validateCard, validateIdCard } = require('../middlewares/requestValidation');
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', validateCard, createCard);
router.delete('/:id', validateIdCard, deleteCard);
router.put('/likes/:id', validateIdCard, likeCard);
router.delete('/likes/:id', validateIdCard, dislikeCard);

module.exports = router;
