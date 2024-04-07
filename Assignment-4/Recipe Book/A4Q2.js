const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/main.html');
});

// Route for Pav Bhaji recipe
app.get('/1', function(req, res) {
    res.sendFile(__dirname + '/recipe1.html');
});

// Route for Vada Pav recipe
app.get('/2', function(req, res) {
    res.sendFile(__dirname + '/recipe2.html');
});

// Route for Shawarma recipe
app.get('/3', function(req, res) {
    res.sendFile(__dirname + '/recipe3.html');
});

app.listen(3000);
