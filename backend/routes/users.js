const router = require('express').Router();
const { validateUserUpdate, validateAvatar, validateId } = require('../middlewares/requestValidation');
const {
  getUsers, getUser, getCurrentUser, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:_id', validateId, getUser);
router.post('/', createUser);
router.patch('/me', validateUserUpdate, updateUser);
router.patch('/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
