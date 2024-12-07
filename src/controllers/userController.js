
const database = require('../database/connection')

    class userController {


        getUsers(request,response) {
            database.select("*").table("cliente").then(cliente =>{
                console.log(cliente),
                response.json(cliente)
            }).catch(error=>{
                console.log('Ocorreu um erro com sua requisição',error)
            });
        }
    
        createUser(request,response) {
            
            const { id, nome, sobrenome, email, telefone, endereco, cidade, estado, cep, data_cadastro} = request.body

            database.insert({ id, nome, sobrenome, email, telefone, endereco, cidade, estado, cep, data_cadastro}).table('cliente').then(data => {
                console.log(data);
                response.json({'mensagem':'cadastro realizado com sucesso'});
            }).catch(error => {
                console.log('ocorreu um erro ao cadastrar o usuario',error)
            })

        };

    }

    
    
    module.exports = new userController();