const db = require('../database/mongodb')


exports.createNewOrder = async(req, res, next) => {

    try {

        const Order = await db.order()

        req.body.orderStatus = 'Received'
        req.body.userId = req.user._id

        const order = await Order.create(req.body)
        console.log(order)

        res.status(201).json({
            success: true,
            message: "Order Created"
        })

    } catch (e) {
        next(e)
    }
}

exports.getUserOrders = async(req, res, next) => {
    try {
        const Order = await db.order()
        const orders = await Order.findByUser(req.user._id)

        res.status(200).json({
            success: true,
            orders: orders
        })

    } catch (e) {
        next(e)
    }
}

exports.getAdminOrders = async(req, res, next) => {
    try {
        const Order = await db.order()
        const orders = await Order.find();

        res.status(200).json({
            success: true,
            orders: orders
        })

    } catch (e) {
        next(e)
    }
}