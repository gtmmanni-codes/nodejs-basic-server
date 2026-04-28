let http = require("http");
let server = http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.end("Home Data here")
    }else if(req.url == "/news"){
        res.end("New Data here")
    }else if(req.url =="/about"){
        res.end("About Data here")
    }else{
        res.end("Welcome to Null Page")
    }

})

server.listen("8000"); //http://localhost:8000
