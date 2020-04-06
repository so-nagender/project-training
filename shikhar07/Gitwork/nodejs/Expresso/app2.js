const express = require('express')
const app = express();
app.use(express.json())

const gethandler=(req,res)=>{
    const reply=
    {
        message:'success'
    }
    res.json(reply)
}
var users = {}
var id= 0;
app.post('/users', function(req, res){
    const coronago = req.body;
    id = id+1;
    coronago.id = id;
    users[id] = coronago;
    console.log(users)
    res.json(coronago);
})
app.get('/users', function(req, res){
    console.log(users);
    res.send(users)
    res.end();
})
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    res.json(users[id]);
})
app.get('/users/:id/:fieldname',(req,res)=>{
    const id=req.params.id;
    const field=req.params.fieldname;
    user = users[id]
    res.json(user[field]);
})
app.delete('/users/:id', (req, res) => {
    const id=req.params.id;
    delete users[id];
    console.log(users)
    res.send("User Deleted")
})
app.put('/users/:id', (req, res) => {
    const id=req.params.id;
    const gocorona = req.body;
    key = Object.keys(gocorona);
    value = Object.values(gocorona);
    for(var i = 0; i<key.length; i++)
    {
    users[id][key[i]] = value[i];
    }
    console.log(users)
    res.send("User Updated")
})
app.get('/',gethandler)
app.listen(8000)