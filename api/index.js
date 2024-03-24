const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');

const Config = require('../Config/config.MongoDB.js');

const salt = bcrypt.genSaltSync(10);
const secret = "asdfasfdgawtu2h35uh23lurh8eufyao";
const port = process.env.PORT || 8081;

app.use(cors({credentials:true, origin:'http://localhost:8080'}));
app.use(express.json());

mongoose.connect(Config.BlogMongoURI);

app.post("/register", async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc  = await User.create({
            username, 
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
})
app.post('/login', async (req, res) =>{
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOK = bcrypt.compareSync(password, userDoc.password);

    if(passOK){
        //logged in
        jwt.sign({username, id:userDoc.id}, secret, {}, (err, token) => {
            if(err) throw err;

            res.cookie('token', token).json('ok');
        })
        //res.json()
    }
    else{
        res.status(400).json('wrong credentials');
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
//mongodb+srv://blog:vnBJnxSIJvqmoMVa@cluster0.tbhmgzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0