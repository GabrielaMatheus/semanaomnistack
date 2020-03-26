const express=require('express'); //deu pra variavel express todas as informações da pasta express

const app= express();
const cors=require('cors'); //para segurana do programa
const routes = require ('./routes'); // './' para mostrar q é um arquivo da mesma pasta, sem ficaria pacote
app.get('/',(request,response)=>{
    response.send("Rodou")
});

app.use(cors()); 
app.use(express.json());
app.use(routes);


app.listen(3333,()=> {
    console.log("servidor online")
}); //essa variavel ouve por 3333