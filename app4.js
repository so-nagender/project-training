const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

// Handler 
const gethandler=(req,res)=>{
  const reply=
  {
      message:'Server haas been started'
  }
  res.json(reply)
}


var user=[]

//fetching the users
app.get('/users',(req,res)=>{ 
 res.send(user);
 res.json(req.body)
 res.end();}
);
//fetching the users by id and any fields
app.get('/users/:id/:fieldname', (req, res) =>{
  const id = req.params.id;
  const field=req.params.fieldname
  console.log(id);
  const data =  user[id-1][field];
  res.json(data);
})
//fetching the users by id 
app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  let userid = user.find(user => user.id === parseInt(req.params.id));
  if(!userid) return res.json(404, {error: 'id not found'});
  console.log(id);
  const data =  user[id-1];
  res.json(data);
})
  
//Post the data to the users
app.post('/users', (req, res) => {
const a=req.body;
a.id=user.length+1;
let userexist = user.find(u => u.name === req.body.name);
if(userexist) return res.json(409, {message: 'User Already exists'});
user.push(a);
console.log(a)
res.json(a.id);
})

//deleting data by using  particular id
app.delete('/users/:id',(req,res)=>
{
  const id=parseInt(req.params.id)
  user.splice(id-1);
  res.json("data is deleted")
})

//updating the data by using particular id
app.put('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id) - 1
  let temp = Object.keys(req.body)
  temp.forEach(element => {
      user[id][element] = req.body[element]
  });
  res.json(user[id])
})


app.listen(8000);