const users = require("../database/models/users.js")

module.exports = {
    
    loginAsUsers: async function(req, res) {
        try {
            const { name, password } = req.body;
            const result = await users.login(name, password);
            console.log(result,"testing ...");
            var x = result[0][0]
            if (x.password === password) {
console.log(x)
                res.status(200).send({ message: 'Login successful' });
            }

        } catch (error) {
            console.error('password mte3ek wrong:', error);
            console.log(x)
            res.status(500).send({ message: 'Internal server error' });
        }
    },
        
    addUser: async function(req, res) {
        const {name,password} = req.body
    try{
            const response = await users.add(name,password)
            res.status(200).send(response)
        }catch(err){
            res.status(500).send(err)
        }
    }
}