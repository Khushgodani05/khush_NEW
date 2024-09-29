const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mini-twitter');

const db = mongoose.connection;

app.get('/users', async (req, res) => {

    let users = await db.collection('users').find().toArray();

    res.send(users);
});

app.post('/users' , async (req, res) => {

    await db.collection("users").insertOne(req.body)

    res.send({
        message: "user created"
    })
})

app.put('/users/:userId' , async (req, res) => {

    await db.collection("users").updateOne(
        {"_id": new mongoose.Types.ObjectId(req.params.userId)},
        {$set: req.body}
    )

    res.send({
        message: "updated"
    })
})

app.delete('/users/:userId' , async (req, res) => {

    await db.collection("users").deleteOne(
        {"_id": new mongoose.Types.ObjectId(req.params.userId)},
    )

    res.send({
        message: "deleted"
    })
})


// routing
app.get('/', async (req, res) => {

    //let userList = await db.collection('users').find({}).toArray();
    // console.log(userList);

    /*let outpuet = await db.collection('users').insertMany([
        {
            name: "User 1"
        },
        {
            name: "User 2"
        }
    ])*/

    /*let output = await db.collection('users').updateMany({name: "User 1"}, {
        $set: {age: 30}
    })*/

        // let output = await db.collection('users').deleteMany({age: 30})
         let output = await db.collection('users').updateMany({name: "User 2"}, {
            $inc: {like: 1}
        })




  res.send(await db.collection('users').find({}).toArray())
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })