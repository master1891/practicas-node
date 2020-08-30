const Persona = require("./libs/persona");



let persona1 = new Persona("Nelson");


persona1.on("hablar",(mensaje)=>{
    console.log(`${persona1.nombre} : ${mensaje}`);
});


//emitir un evento
persona1.emit("hablar","Es una buena noche");





