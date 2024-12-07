const express = require('express');
const cors = require('cors');

const router =  ('./src/routes/routes.js');


// iniciar uma aplicacao express
const app = express()
app.use(cors());
app.use(express.json());
app.use(router)

// (port,function)
app.listen(8080,() => {
    console.log('app iniciado na port 8080')
})