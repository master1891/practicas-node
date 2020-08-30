process.stdout.write("Ingrresa tu nombre: ");

process.stdin.on("data",function(data){

    var entrada = data.toString().trim();
    
    process.stdin.write(`Tu nombre es: ${entrada}`);
    process.exit();
    

});