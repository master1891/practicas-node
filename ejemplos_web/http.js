const http = require("http");


const options = {
    hostname : 'localhost',
    port:80,
    path:'/ejemplosync/test.php',
    method:'GET'
}

const responce =  http.request(options,(res) =>{
    console.log(`status code: ${res.statusCode}`);
    console.log(`Headers: %j`, res.headers);

    let body = '';

    res.on("data", (chunk) =>{
        body += chunk;
    });

    res.on("end",() =>{
        console.log('Resultados: ');
        console.log(body);
    });

});

responce.on("error",err =>{});

responce.end();