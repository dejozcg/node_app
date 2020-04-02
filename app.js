/**
 * 03_06 je trenutna lekcija
 */
var express = require('express');
var app = express();
var routes = require('./routes/index');

app.set('view engine', 'ejs');
app.locals.pagetitle = 'Awesome website';

app.get('/',routes.index);
app.get('/about',routes.about);

// app.get('/who/:name?',function(req,res){
//     var name = req.params.name;
//     console.log(req.params);
//     res.send(name + ' was here');
// });

// app.get('/who/:name?/:title?',function(req,res){
//     var name = req.params.name;
//     var title = req.params.title;
//     console.log(req.params);
    
//     res.send('<p>Name: ' +name + '<br>title: ' +title +'</p>');
// });

app.get('*',function(req,res){
    res.send('Bad Route');
});

var server = app.listen(3000, function(){
    console.log('Listening on port 3000');
});
