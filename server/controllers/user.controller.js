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
            image: req.file ? `/uploads/${req.file.filename}` : '',
            roal: "user",
            createdAt: new Date()
        }


        // console.log(userDoc)


        const user = await User.create(userDoc)


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
                message: "email or password not match"
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "email or password not match"
            })
        }

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


exports.userDashbordController = async(req, res, next) => {

    try {

        let totalOrders = 0
        let totalSpend = 0
        let ordersPanding = 0

        const Order = await db.order()
        const orders = await Order.findByUser(req.user._id)

        totalOrders = orders.length
        orders.forEach((order) => totalSpend += order.total)
        orders.forEach((order) => {
            if (order.orderStatus != "Deleverd") {
                ordersPanding++
            }
        })


        res.status(200).json({
            totalOrders,
            totalSpend,
            ordersPanding
        })


    } catch (error) {
        console.log(error)
    }
}



exports.getAdminUsers = async(req, res, next) => {

    try {
        const User = db.user()

        const users = await User.findAll()

        res.status(200).json({
            success: true,
            users
        })

    } catch (e) {
        next(e)
    }
}