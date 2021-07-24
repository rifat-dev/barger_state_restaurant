const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookeParser = require('cookie-parser')
const dotenv = require('dotenv')
const expressFileUploader = require('express-fileupload')
const path = require('path')


//app setup
const app = express()

//bodyParser parse application/json
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded





// 
const midleware = [
    morgan('dev'),
    cors(),
    cookeParser('SECRET')
]

app.use(midleware)

app.use(express.static("public"))
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: 'server/config/.env' })
}


// import routers
const userRoute = require('./routers/user.router')
const foodRoute = require('./routers/food.router')


// use routers
app.use('/api/user', userRoute)
app.use('/api/food', foodRoute)

module.exports = app