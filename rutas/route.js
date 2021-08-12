'use strict'
const rutas = require('express').Router()
const cliente = require('../model/cliente');
const cors = require('cors');
const corsOptions = {
    'Access-Control-Allow-Origin': 'https://bancoestado.herokuapp.com',
    'Access-Control-Allow-Methods': 'GET,OPTIONS',
    "Access-Control-Allow-Headers": "X-Requested-With"
};
rutas.get('/clientes', cors(corsOptions), function (req, resp) {
    resp.status(200).json(cliente);
});
module.exports = rutas;