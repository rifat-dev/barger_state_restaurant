const router = require('express').Router()

const { isAuthenticate, isAdmin } = require('../midewares/authentication.midleware')

const {
    createNewOrder,
    getUserOrders
} = require('../controllers/order.controller')

router.post('/create-order', isAuthenticate, createNewOrder)
router.get('/my-orders', isAuthenticate, getUserOrders)


module.exports = router