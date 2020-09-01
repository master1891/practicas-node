const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res) =>{

    //ver los logs
  console.log(`${req.method} solicita ${req.url} `);

  if(req.url == "/"){
    renderHtml(res);
  } 
  else if(req.url.match(/.css$/)){
    renderCss(res,req);
  }

}).listen(3000);


function renderCss(responce,req){
    
    const ruta = path.join(__dirname,req.url);

    const fileStrean = fs.createReadStream(ruta,"UTF-8");

    responce.writeHead(200,{"Content-Type":"text/css"});
    fileStrean.pipe(responce);

}


function renderHtml(responce){
    fs.readFile("index.html","UTF-8",(err,html) =>{

        responce.writeHead(200,{"Content-Type":"text/html"});
        responce.end(html);

    });
}

