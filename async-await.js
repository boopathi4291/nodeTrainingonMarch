let fs = require('fs');

function readFile1(){
    return new Promise((resolve, reject)=>{
        fs.readFile("package.json","utf8",(err,data)=>{
            if(err){
                reject (err);
            }
            resolve(data);
        });
    });
}
function writeFile1(data){
    return new Promise((resolve, reject)=>{
        fs.writeFile("package1.json",data.toString(),(err)=>{
            if(err){
                reject (err);
            }
            resolve("write success");
        });
    });
}

(async ()=>{
    let data = await readFile1();
    let written = await writeFile1(data);
    console.log(written)
})();
function readDir(){
    return new Promise((resolve, reject)=>{
    fs.readdir("c:/windows",(err,items)=>{
        if(err){
            reject (err);
        }
        resolve (items);
    });
});
}
(async ()=>{
    let data = await readDir();
    console.log(data);
})();



