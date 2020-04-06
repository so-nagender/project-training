const express = require('express')
const app = express()
app.use(express.json());

var users = [];

app.post('/user', function(req, res){
    const x = req.body;
    const userExists = users.find(u=> u.name === req.body.name);
    if (userExists) {
        return res.status(404).json({ error: 'name found' })
    }
    x.id = users.length;
    users.push(x);
    res.json(x.id);
})

app.get('/user', function(req, res){
    console.log(users);
    res.send(users);
    res.end();
})

app.get('/user/:id', function(req, res){
    const id = req.params.id;
    console.log(id);
    const data = users[id];
    res.json(data);
    res.end();
})

app.get('/user/:id/:field', function(req, res){
    const id = req.params.id;
    const field = req.params.field;
    console.log(id);
    console.log(field);
    const data = users[id][field];
    res.json(data);
    res.end();
})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id);
    res.json("User Deleted From Array");
    res.end();
})

app.put('/user/:id', function(req, res){
    const id = req.params.id;
})

app.listen(8000);






