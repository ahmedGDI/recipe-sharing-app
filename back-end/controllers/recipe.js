const {getAll,getOne,add,update,del} = require("../database/models/recipe")

module.exports = {
    getAllRecipe: async (req, res)=> {
        try{
            const res = await getAll()
            res.status(200).send(res[0])
        }
        catch(err){
            console.log('getAllRecipe faild :',err)
            res.status(404).send(err)
        }
    },
    getOneRecipe: async (req, res)=> {
        const {id} = req.params
        try{
            const res = await getOne(id)
                res.status(200).send(res)
        }
        catch(err){
            console.log('getOneRecipe faild ',err)
                res.status(404).send(err)
        }
    },
            addRecipe: async (req,res)=>{
                try{
                const {body} = req
                    const res = await add(body)
                    res.status(201).send(res)

            }catch(err){
                    console.log('addRecipe faild :',err)
            res.status(404).send(err)
        }
    },
    deleteRecipe : async (req,res)=>{
        try{
    const {id}= req.params
    const res = await del(id)
    res.status(200).send(res)
}
catch(err){
        res.status(404).send(err)
}
    },
    updateRecipe : async ()=>{
        try{
            const {body} = req
            const {id}= req.params
            const res = await update(id,body)
            res.status(200).send(res)
        }
        catch(err){
                res.status(404).send(err)
        }
    }
}