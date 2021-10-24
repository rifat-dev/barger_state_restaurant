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
    getAdminUsers,
    userDashbordController
} = require('../controllers/user.controller')


const { isAuthenticate } = require("../midewares/authentication.midleware")

router.post('/register', upload.single('avatar'), signUpValidator, userRegisterController)
router.post('/signIn', signInvalidator, userSignInController)

router.get('/signout', userSignOutController)
router.get('/dashbord', isAuthenticate, userDashbordController)
    //admin route
router.get('/admin-users', getAdminUsers)


module.exports = router