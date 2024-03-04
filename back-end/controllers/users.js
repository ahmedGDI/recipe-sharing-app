const users = require("../database/models/users.js")

module.exports = {
    
    getAllUsers: async function(req, res) {
        try{
            const response = await users.getAll()
                res.status(200).send(response[0])
        }
        catch(err){
                res.status(500).send(response)
        }
    },
    addUser: async function(req, res) {
        const {name,password} = req.body
        const response = await users.add(name,password)
        try{
            res.status(200).send(response)
        }catch(err){
            res.status(500).send(err)
        }
    }
}