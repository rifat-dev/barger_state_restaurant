const { body } = require('express-validator')

exports.signUpValidator = [
    body('name')
    .not().isEmpty().trim().withMessage('Name field is required'),
    body('email')
    .not().isEmpty().trim().withMessage('Email Address field is required')
    .isEmail().withMessage('Email field is not a valid format').normalizeEmail(),
    body('password')
    .not().isEmpty().trim().withMessage('Password field is required')
    .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1
    }).withMessage('Password is too weak. Field must contain min. of 6 characters, 1 lowercase and uppercase character and a symbol')
]

exports.signInvalidator = [
    body('email')
    .not().isEmpty().trim().withMessage('Email Address field is required')
    .isEmail().withMessage('Email field is not a valid format').normalizeEmail(),
    body('password')
    .not().isEmpty().trim().withMessage('Password field is required')
]

exports.foodValidator = [
    body('name')
    .not().isEmpty().trim().withMessage('Name field is required'),
    body('title')
    .not().isEmpty().trim().withMessage('Title field is required'),
    body('part')
    .not().isEmpty().trim().withMessage('Part field is required'),
    body('category')
    .not().isEmpty().trim().withMessage('Category  field is required'),
    body('description')
    .not().isEmpty().trim().withMessage('Description  field is required'),
    body('price')
    .not().isEmpty().trim().withMessage('Price  field is required'),
]