const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cookeParser = require('cookie-parser')
const dotenv = require('dotenv')
const path = require('path')


//app setup
const app = express()

//bodyParser parse application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// 
const midleware = [
    morgan('dev'),
    cors()
]

app.use(midleware)
app.use(express.static("public"))
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({ path: 'server/config/.env' })
}


// import routers
const user = require('./routers/user.router')


// use routers
app.use('/api/user', user)

module.exports = app