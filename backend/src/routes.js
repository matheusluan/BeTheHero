const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);


//ROTA PARA CAPTURA DAS ONGS
routes.get('/ongs', OngController.index);
//ROTA INSERÇÃO DE ONGS
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

//ROTA PARA CAPTURA DOS CASOS
routes.get('/incidents', incidentController.index);
//ROTA PARA INSERÇÃO DE CASOS
routes.post('/incidents', incidentController.create);
//ROTA PARA EXCLUSÃO DE CASOS
routes.delete('/incidents/:id', incidentController.delete);


module.exports = routes;
