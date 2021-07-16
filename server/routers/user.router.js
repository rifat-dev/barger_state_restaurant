const router = require('express').Router()
const upload = require('../midewares/upload.midleware')


const {
    signUpValidator,
    signInvalidator
} = require('../midewares/validator.midleware')

const {
    userRegisterController,
    userSignInController
} = require('../controllers/user.controller')

router.post('/register', upload.single('avatar'), signUpValidator, userRegisterController)
router.post('/signIn', signInvalidator, userSignInController)


module.exports = router