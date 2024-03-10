const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on the port number ${PORT}`));

//configuration (MONOGODB)
var curl = "mongodb://localhost:27017";
var client = new MongoClient(curl);


//TESTING
app.get('/klef/test', async function(req, res){
    //res.send("Koneru Lakshmaiah Education Foundation");
    res.json("Koneru Lakshmaiah Education Foundation");
});

app.post('/klef/cse', async function(req, res){
    res.json(req.body);
    //res.json("Computer Science and Engineering");
});

//REGISTRATION MODULE
app.post('/registration/signup', async function(req, res){
    try 
    {
        conn = await client.connect();
        db = conn.db('projectb');
        users = db.collection('admin');
        data =  await users.insertOne(req.body);
        conn.close();
        res.json("Registered Successfully...");

    }catch(err)
    {
        res.json(err).status(404);
    }
});

app.post('/login/signin', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('projectb');
        users = db.collection('admin');
        data =  await users.count(req.body);
        conn.close();
        res.json(data);
    }
    catch(err)
    {
       res.json(err).status(404);
    }
});


app.post('/home/uname', async function(req, res){
    try
    {
        conn = await client.connect();
        db = conn.db('projectb');
        users = db.collection('admin');
        data =  await users.find(req.body, {projection:{firstname:true, lastname:true}}).toArray();
        conn.close();
        res.json(data);
    }
    catch(err)
    {
       res.json(err).status(404);
    }
});

// app.post('/home/menu', async function(req, res){
//     try
//     {
//         conn = await client.connect();
//         db = conn.db('projectb');
//         menu = db.collection('menu');
//         data =  await menu.find({}).sort({mid:1}).toArray();
//         conn.close();
//         res.json(data);
//     }
//     catch(err)
//     {
//        res.json(err).status(404);
//     }
// });


// app.post('/home/menus', async function(req, res){
//     try
//     {
//         conn = await client.connect();
//         db = conn.db('S12');
//         menus = db.collection('menus');
//         data =  await menus.find(req.body).sort({smid:1}).toArray();
//         conn.close();
//         res.json(data);
//     }
//     catch(err)
//     {
//        res.json(err).status(404);
//     }
// });