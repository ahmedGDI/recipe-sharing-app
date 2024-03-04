const express = require('express')
const router = express.Router()

const { getAllUsers, addUser } = require('../controllers/users');

router.get('/getAll', getAllUsers)
router.post('/add', addUser)

module.exports = router;