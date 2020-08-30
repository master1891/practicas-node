const eventEmitter = require("events").EventEmitter;
const util = require("util");

//clase persona
var Persona = function(nombre){

    this.nombre = nombre;
}

//persona ereda de emmiter
util.inherits(Persona, eventEmitter)

module.exports = Persona;

