let http = require("http");
let server = http.createServer((req,res)=>{
    if(req.url=="/home"){
        let data =[{
            name:"Manni",
            age:23,
            Gender:"Male"
        },{
            name:"Harsh",
            age:25,
            Gender:"Male"
        }];

        res.end("Home Data here"+JSON.stringify(data));
    }else if(req.url == "/news"){
        res.end("New Data here")
    }else if(req.url =="/about"){
        res.end("About Data here")
    }else{
        res.end("Welcome to Null Page")
    }

})

server.listen("8000"); //http://localhost:8000
