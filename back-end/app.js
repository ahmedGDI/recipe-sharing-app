const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const usersRoute = require('./routes/users')
const recipeRoute = require('./routes/recipe')
const ingredient = require('./routes/ingredient.js')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/users', usersRoute)
app.use('/api/recipe', recipeRoute)
app.use('/api/ingredient', ingredient)

module.exports = app