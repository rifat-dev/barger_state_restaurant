const db = require('../database/mongodb')
const { validationResult } = require('express-validator')
const errorMsgFormater = require('../utils/errorMsgFormater.utils')

exports.createNewFoodController = async(req, res, next) => {

    try {
        const Food = db.food()
        const errors = validationResult(req).formatWith(errorMsgFormater)

        if (!errors.isEmpty()) {
            return res.status(422).json({
                success: false,
                errors: errors.mapped()
            })
        }

        req.body.foodImage = req.file.path
        req.body.user = req.user._id


        const food = await Food.create(req.body)
        console.log(food)
        res.status(200).json({
            success: true,
            food: food
        })

    } catch (e) {
        next(e)
    }

}

exports.getAllFoodsController = async(req, res, next) => {
    try {

        const Food = db.food();

        const foods = await Food.find();

        res.status(200).json({
            success: true,
            foods: foods
        })


    } catch (e) {
        next(e)
    }
}