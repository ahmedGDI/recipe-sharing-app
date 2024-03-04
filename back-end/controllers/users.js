const users = require("../database/models/users.js")

module.exports = {
    
    getAllUsers: async function(req, res) {
        try{
            const result = await users.getAll()
                res.status(200).send(result[0])
        }
        catch(err){
                res.status(500).send(err)
        }
    },
    addUser: async function(req, res) {
        const {name,password} = req.body
        const result = await users.add(name,password)
        try{
            res.status(200).send(result)
        }catch(err){
            res.status(500).send(err)
        }
    }
}