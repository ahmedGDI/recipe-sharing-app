
const conn = require("../index")

module.exports = {

    getAll: function () {
      const sql = 'SELECT * FROM users'
       return conn.query(sql)
      
    },
      add: function (name,password) {
      const sql = 'insert into users (name,password) values (?)'
     return conn.query(sql,[[name,password]])
    } 
    }