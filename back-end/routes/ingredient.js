const express = require('express')
const router = express.Router()

const { getAllIngredient, addIngredient } = require('../controllers/ingredient.js');

router.get('/:id', getAllIngredient)
router.post('/add', addIngredient)

module.exports = router;