const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
  res.redirect('/A2Q1.html')
});

app.post('/get_request', function(req, res){
  var f1 = req.body.f1;
  var f2 = req.body.f2;
  fs.readFile(f1, function(err, data1){
    fs.readFile(f2, function(err, data2){
      fs.appendFile(f1, data2, function(err){
        console.log("File Appended Successfully")
        res.send("Apended!!!!!");
      });
    });
  });
});

app.listen(3000);