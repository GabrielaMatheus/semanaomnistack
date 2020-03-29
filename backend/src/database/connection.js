//essa pagina serve para fazer as conexoes com o banco de dados

const knex= require ('knex'); //importando o knex
const configuration= require ('../../knexfile'); //importando configurações do banco de dados disponíveis no knexfile
const config = process.env.NODE_ENV === 'test'? configuration.test : configuration.development;
const connection= knex(config); //conexão de desenvolvimento(q esta no knexfile)

module.exports= connection; //exportar esse arquivo