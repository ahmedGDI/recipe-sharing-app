const express = require('express')
const router = express.Router()

const { getAllIng, addIngredient,getOne } = require('../controllers/ingredient.js');

router.get('/getAll',getAllIng)
router.get('/:id', getOne)
router.post('/add', addIngredient)

module.exports = router;