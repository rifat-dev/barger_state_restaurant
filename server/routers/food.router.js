const router = require('express').Router()



const {
    createNewFoodController,
    getAllFoodsController,
    getSingleFood,
    getOrderFood
} = require('../controllers/food.controller')


const { isAuthenticate, isAdmin } = require('../midewares/authentication.midleware')
const { foodValidator } = require('../midewares/validator.midleware')
const upload = require('../midewares/upload.midleware')


router.get('/all', getAllFoodsController)
router.get('/single-food/:foodId', getSingleFood)
router.get('/order-food/:foodId', getOrderFood)
router.post('/new-food', isAuthenticate, isAdmin('admin'), upload.single('food-image'), foodValidator, createNewFoodController)


module.exports = router