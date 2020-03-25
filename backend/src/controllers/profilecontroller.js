//rota para mostrar dados especificos da ong
const connection=require('../database/connection'); //importação/conexão com banco de dados

module.exports={
    async index(request,response){
        const ong_id = request.headers.authorization;//acessando os dados da ong q esta logada

        const incidents = await connection('incidents') //buscando incidentes atraves de connection, tabela incidentes
        .where('ong_id', ong_id) //buscando todos os incidentes que foi a ong que criou
        .select('*');

        return response.json(incidents);

    }
}