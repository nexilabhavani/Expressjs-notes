// import router from './router.js';
import express from 'express';


const app=express();
const port=3000;
// app.get('/',(req,res)=>{
//     res.send('hello hiii')
// })

// app.use('/user',router)

// app.post('/users',express.json(),(req,res)=>{
//     const{name,email}=req.body
//     res.json({message:`${name} with ${email} created successfully`})
// })

// app.use((req,res,next)=>{
//     console.log("start")
//     next();

// })

// app.use(express.urlencoded({ extended: true }));

app.post('/login', express.json(),(req, res) => {
//   res.send(`Username: ${req.body.username}, Password: ${req.body.password}`);
    const{user,pwd}=req.body;
    console.log(user,pwd);

});

app.get('/',(req,res)=>{
    // console.log('middle')
    res.send('hello,Express.js')
})



//listen port
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})

//app.method(path,handler)
