import express from "express";
import mongoose from "mongoose";
import { ConnectDB } from "../config/db.js";
import { Person } from "../models/person.js";
const app=express();
const port=3000;

await ConnectDB()
app.use(express.json())

app.get('/',(req,res)=>{
   res.send("Hello monoogo db ");
})

app.post('/person',async(req,res)=>{
    const{email,name,age}=req.body;
 
    const newPerson=new Person({
        name,
        age,
        email
    })
    await newPerson.save()
    console.log(newPerson)
    res.send("person added")
})

app.listen(port,()=>{
    console.log(`server is running now http://localhost:${port}`)
})