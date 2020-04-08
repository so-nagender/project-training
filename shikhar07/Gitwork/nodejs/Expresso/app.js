const express = require('express')
const app = express();
app.use(express.json())
var MongoClient = require('mongodb').MongoClient;

app.post('/', (req, res) => {
    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_email = req.body.e_email;

    var obj = {
        "e_id": e_id,
        "e_name": e_name,
        "e_email": e_email
    };
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if (err) throw err;
        var db = client.db('test');
        db.collection('Employee').insertOne(obj, function (err, result) {
            if (err) {
                res.send({ "insert": "failed" });
            }
            else {
                res.send({ "insert": "success" });
            }
            client.close();
        })
    });
});
app.listen(8000)