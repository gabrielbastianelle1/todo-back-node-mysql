const tasksService = require('../services/service.tasks')

let tasksController={
    getAllTasks: async function(req,res){
        try {
            return res.status(200).json(await tasksService.getAllTasks())
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    },
    insertOneTask: async function(req,res){
        try {
            let values=Object.values(req.body)
            return res.status(200).json(await tasksService.insertOneTask(values))
        } catch (error) {
            return res.send(400).json({error: error.message})
        }
    },
    getAllTasksByUserId: async function(req,res){
        try {
            let id=Object.values(req.body)
            return res.status(200).json(await tasksService.getAllTasksByUserId(id))
        } catch (error) {
            return res.send(400).json({error: error.message})
        }
    }
    

}

module.exports=tasksController