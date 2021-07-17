const jwt = require('jsonwebtoken')
const db = require('../database/mongodb')

exports.isAuthenticate = async(req, res, next) => {


    const User = db.user()

    const token = req.signedCookies.token
    const { id } = jwt.verify(token, process.env.SECRET_KEY)

    if (!id) {
        return res.status(401).json({
            success: false,
            message: "Please login  to access this route"
        })
    }

    const user = await User.findOneById(id)

    req.user = user
    next()

}

exports.isAdmin = (...roals) => {
    return (req, res, next) => {
        if (!req.user.roal.includes(roals)) {
            return res.status(401).json({
                success: false,
                message: 'Protected route'
            })
        }

        next()
    }
}