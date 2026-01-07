import express from 'express';
import router from './router.js';
import  {userlogin,usersignup} from './control.js'
const app=express();
const port=5055;
// app.get('/',(req,res)=>{
//     res.send("hello rishi");
// })

//routing in get methods multiple
// app.get('/about',(req,res)=>{
//     res.send("About Page")
// })
// app.get('/service',(req,res)=>{
//     res.send("service Page")
// })


// //parameter in route
// // /user/:parametername
// //req.params.name

// app.get('/home/:username',(req,res)=>{
//     const username=req.params.username;
//     res.send(`${username} create home page`)
// })

// //query string 
// //http://localhost:3000/querypage?keyword=express
// //req.query.keyword
// app.get('/querypage',(req,res)=>{
//     const key=req.query.rishi;
//     res.send(`hii ${key}`);

// })

//routing first type
// app.get('/user/login',userlogin)
// app.get('/user/singup',usersignup)

//routing secode type
// app.use('/user',router)


//Post request in http

app.post('/users',express.json(),(req,res)=>{
    const {name,age}=req.body;
    res.json({
        message:`hii  ${name} age is ${age}`
    })
    console.log(name,age);
})

//Put methods
// app.put('/users/:id',express.json(),(req,res)=>{
//  const userid=req.params.id;
//  const {name,email}=req.body;
//  res.json({
//     message: `username ${name} with ${email} created successfully`,
//     params:{id:userid},
//     body:{name,email}
//  })
// })

//delete
// app.delete('/users/:id',express.json(),(req,res)=>{
//  const userid=req.params.id;

//  res.json({
//    message:`userid ${userid} deleted succuessfully `
//  })
// })

//Regular expresion


// app.get('/things/:name/:id([0-9]{4})',(req,res)=>{
//     const {name,id}=req.params;
//     res.json({
//         id,name
//     })
// })



// app.get("/things/:id", (req, res) => {
//   const id = req.params.id;
//   if (!/^\d+$/.test(id)) {
//     return res.status(400).send("Invalid ID. Only numbers allowed.");
//   }
//   res.send(`id ${id}`);
// });



app.listen(port,()=>{
    console.log(`server is running now http://localhost:${port}`)
})