const router = require('express').Router()


const {
    getMyReview
} = require('../controllers/review.controller')

const { isAuthenticate } = require('../midewares/authentication.midleware')


router.get('/my-review', isAuthenticate, getMyReview)


module.exports = router