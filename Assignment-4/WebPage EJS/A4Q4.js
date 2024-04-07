const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render("A4Q4");
});

app.post('/form', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const desig = req.body.designation;
    res.render('emp', {name, email, desig});
});

app.listen(3000);

