const authctrl = require('./auth.controller')

const authRouter = require('express').Router()

authRouter.post('/register',authctrl.register)

authRouter.post('/login',authctrl.login)

authRouter.delete('/logout',authctrl.logout)

authRouter.get('/activation/:token',authctrl.activation)

authRouter.get('/resend-activation/:token',authctrl.resendActivation)

authRouter.get('/profile',authctrl.profile)

module.exports = authRouter