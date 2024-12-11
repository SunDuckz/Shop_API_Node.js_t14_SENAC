const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes');
var UserRouter =  ('./src/routes/routes.js');


// iniciar uma aplicacao express
const app = express()
app.use(cors());
app.use(express.json());
app.use(router,"/Api.v2")

// (port,function)
app.listen(8080,() => {
    console.log('app iniciado na port 8080')
})