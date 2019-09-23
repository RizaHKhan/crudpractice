const express = require('express')
const router = require('./router')

const app = express()

//requiring static files. makes content of that folder in the root of our server


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('public'))

app.set('views', 'views')
app.set('view engine', 'ejs')


app.use('/', router)

module.exports = app