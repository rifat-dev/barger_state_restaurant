const jwt = require('jsonwebtoken')

const sendToken = (user, code, res) => {

    const User = {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        roal: user.roal,
        createdAt: user.createdAt
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '4h' })

    const options = {
        maxAge: 1000 * 60 * 60 * 4, // would expire after 4h
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
    }

    res.status(code).cookie('token', token, options).json({
        success: true,
        token,
        User
    })

}

module.exports = sendToken