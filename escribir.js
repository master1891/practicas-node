const fs = require("fs");

//verificar si existe un archivo
const archivo = "text.txt"

if (fs.existsSync(archivo)) {
    fs.writeFileSync(archivo,"Hola mundo");
    console.log("escrito correctemente");
}

//este es un comentario nuevo
//este es otro comentario