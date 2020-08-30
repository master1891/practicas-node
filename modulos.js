var path = require('path');
var util = require('util');
var v8 = require("v8");



//console.log(path.join(__dirname,"hola","mundo"));

//util.log("Hola");

var nombre = "Nelson";
var edad = 29;

var mesagge = util.format("Hola %s, tienes %d ",nombre,edad);

process.stdout.write(mesagge);

var heapInfo = v8.getHeapStatistics();

console.log(heapInfo);