const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/A4Q3.html');
});

app.post('/download', function(req, res){
    var filename = req.body.file;
    res.download(__dirname + '/' + filename);
});

app.listen(3000);