const https = require("https");
const fs = require("fs");

const options = {
    key :fs.readFileSync(__dirname+'/boopathiprivatekey.pem'),
    cert: fs.readFileSync(__dirname+'/boopathicert.pem')
}

const server = https.createServer(options, (req,res)=>{
res.writeHead(200,{
    "Content-Type":"text/html"
});
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

server.listen(8080,()=>{
    console.log("listening to port 8080 with ssl")
})