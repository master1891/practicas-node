const fs = require("fs");

//fs.renameSync("text.txt","texto.txt");

/*
fs.rename("texto.txt","nuevoNombre.txt",(err) =>{
    if(err){
        throw "Error al renombrar el archivo";
    }
    console.log("Nombre cambiado");
});
*/

fs.unlink("nuevoNombre.txt",(err) => {
    if(err)
        throw "Error al eliminar el archivo";
    
        console.log("Archivo eliminado");
});
