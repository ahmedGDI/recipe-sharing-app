const express = require('express')
const router = express.Router()

const { getAllRecipe, addRecipe, getOneRecipe,updateRecipe ,deleteRecipe} = require('../controllers/recipe')

router.get('/getAll', getAllRecipe)
router.get('/:id', getOneRecipe)
router.post('/add', addRecipe)
router.put('/:id',updateRecipe)
router.delete('/:id',deleteRecipe)

module.exports = router;