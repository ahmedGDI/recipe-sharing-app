const {getOne,add,getAll} = require("../database/models/ingredient.js")


module.exports = {
    getOne: async (req, res)=> {
        const {id} = req.params
        try{
                const response = await getOne(id)
                res.status(200).send(response[0])
        }
        catch(err){
            console.log('getOne',err)
        res.status(404).send(err)
        }
    },
    getAllIng :async (req,res)=>{
        try{
            const response = await getAll()
            res.status(200).send(response[0])

        }catch(err){
            console.log('gettAllIng falid :',err)
            res.status(404).send(err)

        }
    },
    addIngredient: async (req,res)=> {
        const {body} = req
        try{
            const response = await add(body)
            res.status(200).send(response)
        }
        catch(err){
            console.log('addIngredient faild :',err)
            res.status(404).send(err)
        }
    }
}