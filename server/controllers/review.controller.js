const db = require('../database/mongodb')




exports.createReview = async(req, res, next) => {
    try {
        const Review = await db.review()

        req.body.userId = req.user._id
        req.body.image = req.user.image

        await Review.create(req.body)

        res.status(201).json({
            success: true,
            message: "Review create success"
        })


    } catch (e) {
        next(e)
    }
}


exports.getMyReview = async(req, res, next) => {
    try {
        const Review = await db.review()

        const review = await Review.findByUser(req.user._id)

        console.log(review[0])

        res.status(200).json({
            success: true,
            review: review[0]
        })


    } catch (e) {
        next(e)
    }
}