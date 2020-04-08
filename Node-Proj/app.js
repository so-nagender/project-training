const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
const gethandler=(req,res)=>{
  const reply=
  {
      message:'Now Server is working'
  }
  res.json(reply)
}


//Data fetching by Id
app.get('/users/:id/:fieldname', (req, res) =>{
  const id = req.params.id;
  const field=req.params.fieldname
  console.log(id);
  const data =  user[id-1][field];
  res.json(data);
})

app.get('/users/:id', (req, res) =>{
  const id = req.params.id;
  let userid = user.find(data => data.id === parseInt(req.params.id));
  if(!userid) return res.json(404, {error: 'id is not present'});
  console.log(id);
  const data =  user[id-1];
  res.json(data);
})
   
app.post('/users', (req, res) => {
  const postData=req.body;
  postData.id=user.length+1;
  let userexist = user.find(data => data.name === req.body.name);
if(userexist) return res.json(409, {message: 'user is present already'});
user.push(postData);
console.log(postData)
res.json(postData.id);
})

var user=[]


app.get('/users',(req,res)=>{
 res.send(user);
 res.json(req.body)
 res.end();}
);


//Data deletion by id
app.delete('/users/:id',(req,res)=>
{
  const id=parseInt(req.params.id)
  user.splice(id-1);
  res.json("data has been deleted")
})

//Data updation by id
app.put('/users/:id',(req,res)=>{
  const id = parseInt(req.params.id) - 1
  let temp = Object.keys(req.body)
  temp.forEach(element => {
      user[id][element] = req.body[element]
  });
  res.json(user[id])
})


app.listen(8000);