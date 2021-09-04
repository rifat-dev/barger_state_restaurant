const router = require('express').Router()


const {
    getMyReview,
    createReview
} = require('../controllers/review.controller')

const { isAuthenticate } = require('../midewares/authentication.midleware')


router.get('/my-review', isAuthenticate, getMyReview)
router.post('/create-review', isAuthenticate, createReview)


module.exports = router