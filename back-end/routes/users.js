const express = require('express')
const router = express.Router()

const { loginAsUsers, addUser } = require('../controllers/users');

router.post('/getAll', loginAsUsers)
router.post('/add', addUser)

module.exports = router;