const fs = require("fs");



if(fs.existsSync("js")){
    console.log("Existe el archivo");
}
else{

    fs.mkdir("js",(err)=>{
        if (!err) {
            console.log("archivo creado");
        }
        else{
            console.log("Error al crear el archivo");
        }
    });
}
