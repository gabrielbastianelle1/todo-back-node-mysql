const { response } = require('express')
const connection = require('../../database')
const user = require('../models/model.users')

let usersService={
    getAllUsers: function(){
        return new Promise((response,reject) => {
            connection.query('select * from users',(err,result) => {
                if(err){
                    return reject(err)
                }
                return response(result)
            })
        })
    },
    insertOneUser: function(values){

        return new Promise((response,reject) => {
            connection.query('insert into users (username,senha) values (?,?)',values,(err,results) => {
                if(err){
                    return reject(err)
                }
                return response(results)
            })
        })
    },
    login: function(values){
        return new Promise((response,reject) => {
            connection.query('select * from users where username=?',values[0],async(err,results) => {
                if(err) return reject(err)
                if(results.length==0) return reject({message:'username invalido ou nao existe'})
                
                let userLogado=user(results[0])

                try {
                    await userLogado.compareSenha(values[1])
                    response (userLogado)
                } catch (error) {
                    return reject(error)
                }
            })
        })
    }
}

module.exports=usersService