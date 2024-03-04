const conn = require("../index")
module.exports = {
      getAll:()=> {
        const sql = 'SELECT * FROM recipe'
        return conn.query(sql)
        },
      getOne: (id)=> {
        const sql = 'select * from recipe where users_id = ?'
        return conn.query(sql,[id])
      },
      add:  (body)=> {
        const sql = 'insert into recipe (name,description,users_id) values (?)'
        const {name,description,user_id} = body
        return conn.query(sql,[[name,description,user_id]])
      },
      del :(id)=>{
            const sql = 'delete from recipe where users_id = ? '
            return conn.query(sql,[id])
      },
      update : (id,body)=>{
        const {name,description}=body
const sql = `UPDATE items SET name = '${name}',description = '${description}'  WHERE users_id = ?;`
return conn.query(sql,[id]) 
      }
    }