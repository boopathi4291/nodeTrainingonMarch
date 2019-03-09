const fs = require('fs');

fs.readFile("package.json",(err,data)=>{
    if(err) {
        console.log(err)
        return;
    }
        console.log(data.toString());
})
let syncRead = fs.readFileSync("package.json");
console.log('sync',syncRead.toString());


/**
 * FS write methods
 */

 fs.writeFile("package-copy.json",syncRead.toString(),(err)=>{
     if(err){
         console.log(err);
         return;
     }
     console.log("file created Successfully");
 });