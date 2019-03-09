const net = require('net');

const server = net.createServer();
server.on("connection",(socket)=>{
    let remoteAddress= `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`client connected from = ${remoteAddress}`);
    socket.on("data",data=>{
        console.log(`data is recevied as = ${data.toString()}`);
        socket.write(`data is recevied as = ${data.toString()}`);
    });
    socket.once('close',err=>{
        if(err){
          return false
        }
        console.log(`"connection closed with ",${remoteAddress}`);
    });
});

server.listen(1212,()=>{
        console.log("app listening to port 1212");
})

//https://packetsender.com/download#show    to send a message from the online