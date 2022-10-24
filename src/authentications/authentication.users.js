const LocalStrategy = require('passport-local').Strategy
const usersService = require('../services/service.users')
const BearerStrategy = require('passport-http-bearer').Strategy
const jwt = require('jsonwebtoken');

function initializePassport(passport) {
    passport.use(new LocalStrategy({usernameField:'username',passwordField:'senha',session:false},async (username,senha,next) => {
        try {
            let userLogado=await usersService.login([username,senha])
            return next(null,userLogado)
        } catch (error) {
            return next(null,false,error)
        }
    }))

    passport.use(new BearerStrategy(async (token,next) => {
        try {
            const payload = jwt.verify(token,process.env.key_jw)
            return next(null,payload)
        } catch (error) {
            return next(error)
        }
    }))

}

module.exports=initializePassport
