const {getAll,getOne,add,update,del} = require("../database/models/recipe")

module.exports = {
    getAllRecipe: async (req, res)=> {
        try{
            const response = await getAll()
            res.status(200).send(response[0])
        }
        catch(err){
            console.log('getAllRecipe faild :',err)
            res.status(404).send(err)
        }
    },
    getOneRecipe: async (req, res)=> {
        const {id} = req.params
        try{
            const response = await getOne(id)
                res.status(200).send(response[0])
        }
        catch(err){
            console.log('getOneRecipe faild ',err)
                res.status(404).send(err)
        }
    },
            addRecipe: async (req,res)=>{
                try{
                const {data} = req.body
                console.log(data)
                    const response = await add(data)
                    res.status(201).send(response)

            }catch(err){
                    console.log('addRecipe faild :',err)
            res.status(404).send(err)
        }
    },
    deleteRecipe : async (req,res)=>{
        try{
    const {id}= req.params
    const response = await del(id)
    res.status(200).send(response)
}
catch(err){
        res.status(404).send(err)
}
    },
    updateRecipe : async (req,res)=>{
        try{
            const {body} = req
            const {id}= req.params
            const response = await update(id,body)
            res.status(200).send(response)
        }
        catch(err){
                res.status(404).send(err)
        }
    }
}