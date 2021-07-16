const app = require('./app')
const { connect } = require('./database/mongodb')


connect((err => {
    if (err) return console.log(err)

    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server Started on PORT ${port}`)
        console.log('Database Connect Success')
    })
}))