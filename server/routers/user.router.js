const router = require('express').Router()
const upload = require('../midewares/upload.midleware')


const {
    signUpValidator,
    signInvalidator
} = require('../midewares/validator.midleware')

const {
    userRegisterController,
    userSignInController,
    userSignOutController,
    getAdminUsers
} = require('../controllers/user.controller')


router.post('/register', upload.single('avatar'), signUpValidator, userRegisterController)
router.post('/signIn', signInvalidator, userSignInController)

router.get('/signout', userSignOutController)

//admin route
router.get('/admin-users', getAdminUsers)


module.exports = router