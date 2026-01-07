import express from "express";

const app=express();
const port=3000;
//build-in 

 app.use(express.static('public'));

 //application level
app.use((req,res,next)=>{
    console.log('a new request recived at'+Date.now())
    next();
})

// app.use((req,res,next)=>{
//     console.log('start')
//     res.on('finish',()=>{console.log('end')})
//     next();
// })
// app.get('/',(req,res)=>{
//     console.log("middleware")
//     res.send("Hello, nexila")
// })
app.get('/error',()=>{
    throw new Error("this is the test error ")
})


app.use((err,req,res,next)=>{
    // console.error(err.message)
    // res.send('internal server error')

    console.error(err.stack);
    res.status(500).send("Server error!");
})
app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
})