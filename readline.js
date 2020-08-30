var readLine = require('readline');
const { log } = require('console');

//creacion de la interfaz

var rl = readLine.createInterface(
    process.stdin,
    process.stdout
)


var persona = {
    nombre:"",
    comentarios:[]
}

rl.question("cual es tu nombre? ",(respuesta) =>{
    
    console.log(`Tu nombre es ${respuesta}`)
    persona.nombre = respuesta;

    rl.setPrompt("Pon un comentario")
    rl.prompt();
    //process.exit();

}); 

//eventos

rl.on('line',(input) =>{
    persona.comentarios.push(input.trim());
    //imprimir(persona);
    //process.exit();

    if(persona.comentarios.length >=3){
        imprimir(persona);
        process.exit()

    }else{
            rl.setPrompt("Pon un comentario")
            rl.prompt();
    }

});


function imprimir(dataPersona){
    console.log(dataPersona);
}



