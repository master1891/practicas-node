const fs = require("fs");

//var files = fs.readdirSync("./");

fs.readdir("./",(error,files) => {

    if(error)
        throw error; 

    console.log(files);

    //leer contenido
    var contenido = fs.readFileSync("./text.txt","utf-8");

    console.log(`leyendo ...`);

    console.log(contenido);



});

