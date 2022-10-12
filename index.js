'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;
const server = express();
server.use(cors());

let myJsonFile = require('./data/programming-lang.json');

server.get('/programminglangdata', getAllAPIDataHandler);

function getAllAPIDataHandler(req, res) {
    res.json(myJsonFile);
}

server.listen(PORT, () => {
    console.log(`Listeneing on PORT ${PORT}`);
})