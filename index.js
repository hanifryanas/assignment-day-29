require("dotenv").config()
const app = require('express')();
// const router = require('express').Router();
// const controllerPetStore = require('../controllers/petStore');
const fs = require('fs');
const users = require('./routes/users.js');
const port = 3010;
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/user', users);

app.listen(port, () => {
    console.log(`This app listening on port ${port}!`);
}) 