const http = require('http');
const url = require('url');
const fs = require('fs');

function req(request, response){
console.log(request.url);    
    const base = url.parse(request.url);
    const pathname = base.pathname;
    const fileName = '.'+pathname;
    fs.readFile(fileName,function(err,data){
    if(err){
        response.writeHead(404,{
            'Content-Type':'text/html'
        });
        return response.end('<h1> Not Found </h1>')
    }  
        console.log(pathname + 'received');
        response.writeHead(200,{
            'Content-Type':'text/html'
        });
        response.write(data);
        response.end();
    })
}
http.createServer(req).listen(8080);
console.log('server starter');