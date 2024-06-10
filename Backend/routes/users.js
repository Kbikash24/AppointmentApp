const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteUser } = require('../controllers/UserController');

router.post('/', createUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);

module.exports = router;
