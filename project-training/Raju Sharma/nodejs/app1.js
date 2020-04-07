const express = require('express');
const app = express();
app.use(express.json());

var temp = [];

// Creating user API.
app.post('/users',(req,res) => {
    const a =req.body;
    let userexist = temp.find(o => o.name === req.body.name);
    if(userexist) return res.json(409, {message: 'User Already exist'});
    a.id = temp.length+1;
    temp.push(a);
    res.json(a.id);
})

// Get ALL users.
app.get('/users',(req,res) => {
    const user = temp;;
    const id = parseInt(req.params.id);
    res.json(user) 
})

// Get user by ID.
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    let userID = temp.find(o => o.id === parseInt(req.params.id));
    if(!userID) return res.json(404, {message: 'invalid ID'});
    console.log(id);
    const data =  temp[id-1];
    res.json(data);
})

// Get user by id and field...
app.get('/users/:id/:field', (req, res) =>{
    const id = req.params.id;
    const field = req.params.field;
    let userID = temp.find(o => o.id === parseInt(req.params.id));
    let user = temp.find(o => o.field === req.params.field);
    if(!userID || !user) return res.json(404, {message: 'invalid details'});
    console.log(field);
    console.log(id);
    const data =  temp[id-1][field];
    res.json(data);
})

// Deleting USER...
app.delete('/users/:id', (req,res) => {
    const id  = req.params.id
    let userID = temp.find(o => o.id === parseInt(req.params.id));
    if(!userID) return res.json(404, {message: 'Invalid useriId'});
    temp.splice(id-1)
    res.json("DATA deleted");
})

// Updating API...
app.put('/users/:id',function(req,res){
    const id = (req.params.id)
    let userID = temp.find(o => o.id === parseInt(req.params.id));
    if(!userID) return res.json(404, {message: 'invalid ID'});
    let key = Object.keys(req.body)
    my.forEach(element => {
        temp[id][element] = req.body[element]
    });
    res.json(temp[id])
})

app.listen(8000);

