const router = require('express').Router()



const {
    createNewFoodController
} = require('../controllers/food.controller')


const { isAuthenticate, isAdmin } = require('../midewares/authentication.midleware')

router.post('/new-food', isAuthenticate, isAdmin('admin'), createNewFoodController)

module.exports = router