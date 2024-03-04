const {getAll,add} = require("../database/models/ingredient.js")
module.exports = {
    getAllIngredient: async (req, res)=> {
        const {id} = req.params
        try{
                const res = await getAll(id)
                res.status(200).send(res)
        }
        catch(err){
            console.log('getAllIngredient',err)
res.status(404).send(err)
        }
    },
    addIngredient: async (req,res)=> {
        const {body} = req
        try{
            const res = await add(body)
            res.status(200).send(res)
        }
        catch(err){
            console.log('addIngredient faild :',err)
            res.status(404).send(err)
        }
    }
}