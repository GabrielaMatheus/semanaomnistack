const express=require('express'); //deu pra variavel express todas as informações da pasta express
const { errors } = require('celebrate');
const cors=require('cors'); //para segurana do programa
const routes = require ('./routes'); // './' para mostrar q é um arquivo da mesma pasta, sem ficaria pacote
const app= express();

app.get('/',(request,response)=>{
    response.send("Rodou")
});

app.use(cors()); 
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports =app;