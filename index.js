const express=require("express");
require('dotenv').config();
const User=require("./model")
const app=express();

app.use(express.json());


app.get('/user-get',async(req,res)=>{
  try{
     const user= await User.findAll();
     res.status(201).send(user);
  }catch(e){
    res.status(e)
  }
})

app.post('/user-post',async(req,res)=>{
    // const { email, fullName, age, employed} = req.body;
    try {
        const newWorkpackage = await User.create({
          id:req.body.id,
          email:req.body.email,
          fullName:req.body.fullName,
          age:req.body.age,
          employed:req.body.employed
        });
        res.send(newWorkpackage);
        console.log(newWorkpackage);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }}
)

app.get("/user-get/:id", async(req,res)=>{
  try{
    // console.log(req.params.id);
    const id= req.params.id;
    const user=await User.findByPk(id);
    res.status(201).send(user);
    console.log(user);
  }catch(e){
    res.status(400).send(e.message);
    console.log(e.message);
  }
})

app.patch('/user/:id', async(req,res)=>{
  try{
    const id= req.params.id;
    const user= await User.update(req.body, {
      where: {id :id}
    })
    res.status(201).send(user)
  }catch(e){
    res.status(e.message);
    console.log(e.message);
  }
})

app.delete("/user-delete/:id", async(req,res)=>{
  try{
    const id= req.params.id;
    const user= await User.destroy({
      where: { id: id }
    })
    res.status(201).send("deleted");
  }catch(e){
    res.status(400).send(e.message);
    console.log(e.message);
  }
})

app.listen(8080, ()=>{
    console.log("server running");
})
