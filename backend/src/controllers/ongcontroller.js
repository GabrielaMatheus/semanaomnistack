
const connection=require('../database/connection'); //importação do banco de dados
const generateUniqueId = require ('../utils/generateUniqueId');

module.exports={
    async index (request,response) {
        const ongs=await connection ('ongs').select('*');
        return response.json(ongs);
    }, 


    async create(request,response){
        const {name, email, whatsapp, city, uf}= request.body; //requisição do corpo
    const id = generateUniqueId (); 


     
    await connection('ongs').insert({ //comando insert é para inserir dados ali dentro
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id}); // vai devolver apenas o id pro cliente, como se ele fosse o cpf de alguem
    }
}