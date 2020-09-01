const fs = require("fs");

//verificar si existe un archivo
const archivo = "text.txt"

/*
if (fs.existsSync(archivo)) {
    fs.writeFileSync(archivo,"Hola mundo");
    console.log("escrito correctemente");
    console.log("nueno codigo necesario");
}
else{
    console.log("El archivo no existe");
}
*/

fs.access(archivo,fs.constants.F_OK,(err) =>{
    if(err){
       console.log("El alchivo no existe");
    }else{
        console.log("el archio existe");
    }
});



var contenido = "Este es el contenido del archivo";

fs.writeFileSync(archivo,contenido);
var textoAdd = "Texto adicional";

fs.appendFile(archivo,textoAdd,(err) =>{
    if (!err) {
        console.log("Texto agregado");
    }else{
        console.log("no se pudo agregar el archivo");
    }
});
