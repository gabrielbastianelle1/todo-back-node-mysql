const express = require('express')
const tasksController = require('../controllers/controller.tasks')
const router_tasks=express.Router()

router_tasks.get('/gettasks',tasksController.getAllTasks)


module.exports=router_tasks