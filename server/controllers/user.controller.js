const db = require('../database/mongodb')
const bcrypt = require('bcrypt')
const sendToken = require('../utils/sendToken.utils')
const { validationResult } = require('express-validator')
const errorFormater = require('../utils/errorMsgFormater.utils')


exports.userRegisterController = async(req, res, next) => {
    try {

        const User = db.user()
        const errors = validationResult(req).formatWith(errorFormater)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.mapped()
            })
        }

        const hashPass = await bcrypt.hash(req.body.password, 11)

        const userDoc = {
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
            image: req.file ? req.file.path : '',
            roal: "user",
            createdAt: new Date()
        }


        // console.log(userDoc)


        const user = await User.create(userDoc)

        // res.status(200).json({
        //     success: true,
        //     user
        // })

        sendToken(user, 200, res)

    } catch (e) {
        next(e)
    }
}

exports.userSignInController = async(req, res, next) => {
    try {

        const User = db.user()

        const errors = validationResult(req).formatWith(errorFormater)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.mapped()
            })
        }


        const user = await User.find(req.body.email)

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user or password not match"
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "user or password not match"
            })
        }

        // res.status(200).json({
        //     success: true,
        //     user
        // })

        sendToken(user, 200, res)

    } catch (e) {
        next(e)
    }
}

exports.userSignOutController = async(req, res, next) => {
    try {

        res.clearCookie("token");

        res.status(200).json({
            success: true,
            message: "User Sign out success"
        })

    } catch (e) {
        next(e)
    }
}