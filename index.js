'use strict'
const express = require('express');
const rutas = require('./rutas/route');
const config = require('./config');
const path = require('path');
const cors = require('cors');
const port = config.PORT;
const host = config.HOST;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('port', port);
app.use('/customerInfo', rutas);
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('Error al iniciar servidor: ', error);
    } else {
        console.log(`API REST corriendo en ${host}: ${port}`);
    }
});