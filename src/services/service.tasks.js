const connection = require('../../database')

let tasksService={
    getAllTasks: function(){
        return new Promise((response,reject) => {
            connection.query('select * from tasks',(err,results) => {
                if(err){
                    return reject(err)
                }
                return response(results)
            })
        })
    },
    insertOneTask: function(values){
        return new Promise((response,reject) => {
            connection.query('insert into tasks (userId,task) values (?,?)',values,(err,results) => {
                if(err) return reject(err)
                return response(results)
            })
        })
    },
    getAllTasksByUserId: function(us){
        return new Promise((response,reject) => {
            connection.query('select * from tasks where userId=?',id,(err,results) => {
                if(err) return(err)
                return response(results)
            })
        })
    }
}

module.exports=tasksService