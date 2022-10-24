const express = require('express')
const usersController = require('../controllers/controller.users')
const tasksController = require('../controllers/controller.tasks')
const passport = require('passport')
const router = express.Router()

/* users */

router.get('/getusers',usersController.getAllUsers)
router.post('/insertusers',usersController.insertOneUser)
router.post('/loginusers',passport.authenticate('local',{session:false}),usersController.login)


/* tasks */

router.get('/gettasks',tasksController.getAllTasks)
router.post('/inserttasks',tasksController.insertOneTask)

module.exports=router