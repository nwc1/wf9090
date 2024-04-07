const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/A4Q1.html");
});

app.get('/formsend', function(req, res){
    var uname = req.query.username;
    var pass = req.query.password;
    res.end("Data received..    Username: "+uname+"      Password: "+pass)
});

app.listen(3000);