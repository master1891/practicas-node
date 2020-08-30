const persona = require("./libs/persona");


let persona1 = new persona("Nelson")

persona1.on("hacer",(message)=>{
    console.log(`${ message}`);
});

persona1.emit("hacer","Tarea");




