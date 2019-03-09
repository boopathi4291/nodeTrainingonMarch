const net = require('net');

let client = net.Socket();

client.connect(1212,"127.0.0.1");

client.on("data",data=>{
    client.write(`i have requested to create a connection"${data.toString()}`);
    
    console.log(`${data.toString()}`);
    client.destroy();
});

client.on("close",()=>{
    client.destroy();
    console.log("connection closed");
})