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


        req.body.foodImage = `/uploads/${req.file.filename}`
        req.body.user = req.user._id


        await Food.create(req.body)

        res.status(200).json({
            success: true,
        })

    } catch (e) {
        next(e)
    }

}

exports.getAllFoodsController = async(req, res, next) => {
    try {

        // food collection 
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

exports.getSingleFood = async(req, res, next) => {
    try {
        const { foodId } = req.params
            // food collection 
        const Food = db.food();

        const { food, relatedFoods } = await Food.findSingleFood(foodId)

        res.status(200).json({
            success: true,
            food: food,
            relatedFoods: relatedFoods
        })

    } catch (e) {
        next(e)
    }
}

exports.getOrderFood = async(req, res, next) => {
    try {
        const { foodId } = req.params
            // food collection 
        const Food = db.food();

        const food = await Food.findOneById(foodId)

        res.status(200).json({
            success: true,
            food: food
        })

    } catch (e) {
        next(e)
    }
}