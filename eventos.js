const eventEmitter = require("events").EventEmitter;
const util = require("util");



//clase persona
var Persona = function(nombre){

    this.nombre = nombre;
}


//persona ereda de emmiter
util.inherits(Persona, eventEmitter)

let persona1 = new Persona("Nelson");


persona1.on("hablar",(mensaje)=>{
    console.log(`${persona1.nombre} : ${mensaje}`);
});


//emitir un evento
persona1.emit("hablar","Es una buena noche");







