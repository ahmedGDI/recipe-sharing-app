const conn = require("../index")
module.exports = {

  getAll: (id)=> {
    const sql = 'SELECT * from ingredient where recipe_id = ?'
       return conn.query(sql,[id])
  },
  add:  (body)=> {
    const {comment,users_id,recipe_id} = body
    const sql = `insert into ingredient (content,users_id,recipe_id) values (?)`
    conn.query(sql,[[comment,users_id,recipe_id]])
  }
};
