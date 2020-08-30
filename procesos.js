console.log(process.argv)

function printParam(parametro){
    var index = process.argv.indexOf(parametro);

    return process.argv[index + 1];

}


console.log(`Tu nombre es ${ printParam("--nombre")} y tienes ${printParam("--edad")}`);