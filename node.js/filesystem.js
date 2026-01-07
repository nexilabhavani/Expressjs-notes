const s=require('fs');

// write and create
// const content="Good morning ,Kiruthika";

// s.writeFile("output.txt",content,(err)=>{
//     if(err) throw err;
//     console.log("File create and written success")
// })
// append
// s.appendFile("output.txt","\n this content added newly",(err)=>{
//     if(err) throw err;
//     console.log("content appended")
// })

//read

// s.readFile("output.txt",'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

//delete
// s.unlink("output.txt",(err)=>{
//     if(err) throw err;
//     console.log("deleted success")
// })
// s.mkdir("test",(err)=>{
//     if(err) throw err;
//     console.log("Success");
// });
s.rmdir("test",(err)=>{
    if(err) throw err;
    console.log("created");
})