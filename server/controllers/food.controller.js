const db = require('../database/mongodb')


exports.createNewFoodController = async(req, res, next) => {

    res.status(200).json({
        success: true,
        user: req.user
    })
}