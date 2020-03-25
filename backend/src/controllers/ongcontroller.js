const crypto= require('crypto'); //para criptografia, tbm pode ser usado pra gerar caracteres aleatórios
const connection=require('../database/connection'); //importação do banco de dados

module.exports={
    async index (request,response) {
        const ongs=await connection ('ongs').select('*');
        return response.json(ongs);
    }, 


    async create(request,response){
        const {name, email, whatsapp, city, uf}= request.body; //requisição do corpo
    const id =crypto.randomBytes(4).toString('HEX'); //a variavel crypto vai pegar 4 caracteres aleatorios e convertelos em string hexadecimal. 
     
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