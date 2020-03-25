const connection=require('../database/connection');
//rota de login, onde vai verificar se a ong realmente existe
module.exports={
    async create(request,response){
        const { id }=request.body; //buscando o id atraves do corpo da requisiçao, ou seja, o id vai vir atraves do corpo

        const ong= await connection('ongs')
        .where('id',id)
        .select('name') //so o nome pq é a unica informacao q vai retornar pro front end
        .first();//pra retornar uma unica ong

        if (!ong){
            return response.status(400).json ({error:'No ONG Found With This ID'});//bad request(algo deu errado)
        }
        return response.json(ong);

    }

}