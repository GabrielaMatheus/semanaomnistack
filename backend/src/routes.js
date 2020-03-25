const express=require('express');

const ongcontrollers = require ('./controllers/ongcontroller');
const incidentcontroller = require ('./controllers/incidentcontroller');
const profilecontroller = require ('./controllers/profilecontroller');
const sessioncontroller = require ('./controllers/sessioncontroller');

const routes=express.Router();

routes.post('/sessions',sessioncontroller.create);

routes.get('/ongs' ,ongcontrollers.index);
routes.post('/ongs' ,ongcontrollers.create);

routes.get('/profile',profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports= routes; //é dessa forma que faz no node para exportar algum arquivo