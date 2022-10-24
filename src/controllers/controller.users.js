const usersService = require('../services/service.users')
const tasksService = require('../services/service.tasks')
const user = require('../models/model.users')
const {createTokenJWT} = require('../authentications/json-web-token.users')


let usersController={
    getAllUsers: async function(req,res){
        try{
            return res.status(200).json(await usersService.getAllUsers())
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    },
    insertOneUser: async function(req,res){
        try{
            let newUser=await user(req.body)
            await newUser.senhaHash()
            return res.status(200).json(await usersService.insertOneUser(newUser.toInsertDatabase()))
        }catch(error){
            return res.status(400).json({error: error.message})
        }
    },
    login: function(req,res,next){
        const token=createTokenJWT(req.user)
        res.set('Authorization',token)
        res.status(204).send()
    }
    
    /* async function(req,res){
        try {
            let values=Object.values(req.body)
            return res.status(200).json(await usersService.login(values))
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    } */
}

module.exports=usersController