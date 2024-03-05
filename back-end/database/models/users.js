
const conn = require("../index")

module.exports = {

    login:  (name, password) => {
      const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
      return conn.query(sql, [name, password]);
  },
    
      add: function (name,password) {
      const sql = 'insert into users (name,password) values (?,?)'
     return conn.query(sql,[name,password])
    } 
    }