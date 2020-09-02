const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");


var app = express();

//app.use(express.static("../ejemplos_web"));

//configurando rutas del servidor


const urlEncodedParser = bodyParser.urlencoded({extended:false});


app.get('/',urlEncodedParser,(req,res) =>{
    
    res.send(`<h1>${req.body.nombre}</h1>`)
    console.log(req.body);


});

app.get('/home',(req,res) =>{
    res.send("Estas en la pagina de inicio");
});


app.listen(3000,() =>{
    console.log('Servidor iniciado');
});

