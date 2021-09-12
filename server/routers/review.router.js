const router = require('express').Router()


const {
    getMyReview,
    createReview,
    getAllReviews
} = require('../controllers/review.controller')

const { isAuthenticate } = require('../midewares/authentication.midleware')

router.get('/all', getAllReviews)
router.get('/my-review', isAuthenticate, getMyReview)
router.post('/create-review', isAuthenticate, createReview)


module.exports = router