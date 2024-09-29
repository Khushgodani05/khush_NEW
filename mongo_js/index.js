const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/practise');

const db = mongoose.connection;

app.get('/', async (req, res) => {

    let users = await db.collection('user').find().toArray();

    res.send(users);
});

app.post('/' , async (req, res) => {

    await db.collection("user").insertOne(req.body);

    res.send({
        message: "user created"
    })
})

app.put('/' , async (req, res) => {

    await db.collection("user").updateOne({post_id:1},{$set:{post_author:"khus godani"}});

    res.send({
        message: "user updated"
    })
})

app.delete('/' , async (req, res) => {

    await db.collection("user").deleteOne({name:"Aarya"});

    res.send({
        message: "user Deleted"
    })
})

app.get('/:user', async (req, res) => {

    let users = await db.collection('user').find({name:req.params.user}).toArray();
 
    res.send(users);
});


app.post('/:user' , async (req, res) => {

    await db.collection("user").insertOne(req.body);

    res.send({
        message: "users inserted"
    })
})


app.put('/:user' , async (req, res) => {

    await db.collection("user").updateOne({post_id:4},{$set:{post_author:"Harshi jogani"}});

    res.send({
        message: "users inserted"
    })
})



app.delete('/:user' , async (req, res) => {

    await db.collection("user").deleteOne({post_id:1});

    res.send({
        message: "users Deleted"
    })
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })

