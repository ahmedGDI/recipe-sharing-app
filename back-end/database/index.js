const mysql = require('mysql2')
const config = require('config')

const connection = mysql.createConnection({
    host: config.host,
    user: config.user, 
    password: config.password, 
    database: config.database 
  }).promise()

  connection.connect().then(()=>{
  console.log('connected to recipe dataBase successfully !')
}).catch(()=>{
  console.log('dataBase server failds to connect !')
})
module.exports = connection