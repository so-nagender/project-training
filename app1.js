const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
const gethandler=(req,res)=>{
  const reply=
  {
      message:'server started'
  }
  res.json(reply)
}


// app.get('/users/:id',(req,res)=>{
//   const id=req.params.id;
 
//   res.json(user);
// })
var user=[
 
]


app.get('/users',(req,res)=>{
 console.log("user");
 res.send(user);
 res.json(req.body)
 res.end();}
);
//fetching the users by id and different fields
app.get('/users/:id/:fieldname', (req, res) =>{
  const id = req.params.id;
  const field=req.params.fieldname
  console.log(id);
  const data =  user[id-1][field];
  res.json(data);
})
//when user does no exist and the id must be invalid 
app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  let userid = user.find(u => u.id === parseInt(req.params.id));
  if(!userid) return res.json(404, {error: 'id not found'});
  console.log(id);
  const data =  user[id-1];
  res.json(data);
})
  
//when the user exists it will show a error message 
app.post('/users', (req, res) => {
  let a=req.body;
 
  let userexist = user.find(u => u.name === req.body.name);
if(userexist) return res.json(409, {message: 'User Already exists'});
a.id = user.length+1;
user.push(a);
res.json(a.id);
})

//deleting data from a particular id
app.delete('/users/:id',(req,res)=>
{
  const id=parseInt(req.params.id);
  user.pop=id-1;
  res.json("data is deleted")
})
//updating the data through id
app.put('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id) - 1
  let temp = Object.keys(req.body)
  temp.forEach(element => {
      user[id][element] = req.body[element]
  });
  res.json(user[id])
})


app.listen(8005);