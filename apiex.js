const express=require("express");
const app=express();
const port=3000;

app.use(express.json());

let users=[];
let userid=1;//auto increment

app.post("/users",(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        return res.status(404).json({error:"name and email are required"});
    }
    const newuser={id:userid++,name,email};
    users.push(newuser);
    res.status(201).json(newuser);
});

app.get("/users",(req,res)=>{
    res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.put("/users/:id",(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' }); 
    const {name,email}=req.body;
    if(name) user.name=name;
    if(email) user.email=email;
    res.json(user); 
})

app.delete("/users/:id",(req,res)=>{
     const user=users.find(u=>u.id===parseInt(req.params.id));
    if (user===-1) return res.status(404).json({ error: 'User not found' }); 
    const deleteuser=users.splice(user,1)[0];
    res.json({message:'user deleted',user:deleteuser})
})
app.listen(port,()=>console.log(`server is running http://localhost:${port}`));