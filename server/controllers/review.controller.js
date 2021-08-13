const db = require('../database/mongodb')


exports.getMyReview = async(req, res, next) => {
    try {
        const Review = await db.review()

        const review = await Review.findByUser(req.user._id)

        res.status(200).json({
            success: true,
            review: Object.assign({}, review)
        })


    } catch (e) {
        next(e)
    }
}