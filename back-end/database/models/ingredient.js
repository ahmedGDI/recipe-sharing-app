const conn = require("../index")
module.exports = {

  getOne: (id)=> {
    const sql = 'SELECT * from ingredient where recipe_id = ?'
       return conn.query(sql,[id])
  },
  getAll:()=>{
        const sql = "SELECT * from ingredient"
        return conn.query(sql)
  },
  add: (body)=> {
    const {content,users_id,recipe_id} = body
    const sql = 'insert into ingredient (content,recipe_id,users_id) values (?)'
    conn.query(sql,[[content,users_id,recipe_id]])
  }
};
