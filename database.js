const mysql = require('mysql')

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'todo'
})

connection.connect()

module.exports=connection