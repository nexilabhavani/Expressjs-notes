const fs=require('fs');
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log("This is the synchronous block i/o check");

