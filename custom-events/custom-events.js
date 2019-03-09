const events =  require("events");

const myEventEmitter = new events.EventEmitter();

myEventEmitter.on("emitting", (data)=>{
    console.log("your emmited data is = ",data);
});

myEventEmitter.emit("emitting","then event is emitted");