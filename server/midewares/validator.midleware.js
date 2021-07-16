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