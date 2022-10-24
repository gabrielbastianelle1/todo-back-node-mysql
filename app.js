require('dotenv').config()

const express = require('express')
const router = require('./src/routes/router.users')
const passport = require('passport')
const initializePassport=require('./src/authentications/authentication.users')
initializePassport(passport)

const app=express()
app.use(express.json())
app.use(router)
app.use(passport.initialize())

app.listen(3500,() => {
    console.log('servidor rodando ta funcionando ainda')
})