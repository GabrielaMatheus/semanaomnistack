//essa pagina serve para fazer as conexoes com o banco de dados

const knex= require ('knex'); //importando o knex
const configuration= require ('../../knexfile'); //importando configurações do banco de dados disponíveis no knexfile

const connection= knex(configuration.development); //conexão de desenvolvimento(q esta no knexfile)

module.exports= connection; //exportar esse arquivo