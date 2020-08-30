//ejecuatar procesos

const exec = require("child_process").exec;

const numero1 = 45;
const numero2 = 30;


exec(`./script.sh ${numero1} ${numero2} `,(error,stdout)=>{

    if(error){
        throw error;
    }
    
    console.log("comando ejecutado");
    console.log(stdout);

});



