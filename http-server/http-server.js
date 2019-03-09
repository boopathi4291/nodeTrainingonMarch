const http = require('http');
const fs = require('fs');
// const server = http.createServer((req,res) =>{
//     res.setHeader("Content-type", "text/html");
//     res.write("my http server");
//     res.end();
// });
// server.listen(9090,()=>{
//     console.log("posrt listening to 9090")
// });

const server = http.createServer((req,res) =>{

    res.writeHead(200,{"Content-Type": "text/html"});
    
    switch (req.method) {
        case "GET":
                    if(req.url === "/home"){
                        console.log("fdg")
                        var stream = fs.createReadStream(__dirname+'/htmls/home.html','utf8');
                        stream.pipe(res);
                    }
            
            break;
    
        default:
            break;
    }
});
server.listen(9090,()=>{
    console.log("port listening to 9090")
})