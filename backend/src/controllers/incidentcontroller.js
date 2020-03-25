const connection=require('../database/connection');

module.exports={
    async index(request,response){
        const {page=1}=request.query; //to querendo buscar os dados da pagina 1

        const [count]= await connection ('incidents').count(); //pra contar os casos no total

        const incidents= await connection ('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id') //mostra os dados da ong tbm, não so dos incidents
        .limit(5) //limite de 5 incidents
        .offset((page-1)*5)
        .select(['incidents.*','ongs.name','ongs.email','ongs.whatsapp','ongs.city','ongs.uf']);//quero trazer todos os dados dos incidentes aqui

        response.header('X-Total-Count',count['count(*)']); //faz o header acessar essa propriedade e mostrar(fica mais bonito mostrar essa informação no começo)

        return response.json(incidents);
    },


    async create(request, response){
    const {title, description, value} = request.body;
    const ong_id= request.headers.authorization; //busca o id da ong atravez do headers authorization

    const [id]= await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    });
    return response.json({ id }); //com chaves pro frontend saber oq eu estou retornando, q no caso é id
    },
    async delete(request,response){



        const { id }= request.params; //pegar o id que esta no request.params
        const ong_id= request.headers.authorization; //ta chamando o id aq pra saber se oq vai ser deletado realmente foi criado pela ong, senao pode deletar o de outra ong

        const incident= await connection('incidents') //busca o incidente dentro da tabela incidentes
        .where('id', id) //onde o id for igual ao id incerido
        .select('ong_id')//deleta somente a coluna ong id
        .first(); //vai retornar apenas um resultado

        if(incident.ong_id != ong_id){
            return response.status(401).json({error: ' Operation Not Permited'});
        } //se o ong id desse incidente for diferente do ong id adicionado, exibe o erro 401 em formato de json, que é n autorizado
        
        await connection('incidents').where('id',id).delete();
        return response.status(204).send(); //é uma resposta que deu sucesso, mas n tem conteudo nenhum para retornar 
    }

}