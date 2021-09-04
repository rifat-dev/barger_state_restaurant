const router = require('express').Router()

const { isAuthenticate, isAdmin } = require('../midewares/authentication.midleware')

const {
    createNewOrder,
    getUserOrders,
    getAdminOrders
} = require('../controllers/order.controller')

router.post('/create-order', isAuthenticate, createNewOrder)
router.get('/my-orders', isAuthenticate, getUserOrders)

//admin order list
router.get("/admin-order", isAuthenticate, isAdmin("admin"), getAdminOrders)


module.exports = router