var express = require('express');
var session = require('express-session'); 
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var Gallery = require('express-photo-gallery');
var config      = require('./config/database'); // get db config file
var Registerschema = require('./app/models/userschema');
var ContactSChema = require('./app/models/contact');
var apiRoutes = express.Router();
var path = require('path');
var port = process.env.PORT || 9000;
var fs = require('fs');
var pass;
var sess;
var i=0;
var j=0;
var z=0;
var { check } = require('express-validator/check')
var options = 
{
    title: "Gallery"
}
var gallery_title = 
{
    title: "Cassava Products"
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect the api routes under /api/*
app.use('/', apiRoutes);

//Express-validator
app.use(express.json())

//Session Management
app.use(session({
    secret: 'ssshhhhh'
}));

 
// log to console
app.use(express.static("public"));
app.use('/css', express.static('public'))
app.use('/js', express.static('public'))
// Use the passport package in our application
mongoose.connect(config.database);
// pass passport for configuration
app.set('view engine', 'ejs');


app.use('/photos', Gallery('path_to_photos', options));
     app.use('/gallery', Gallery('Cassava_Gallery', gallery_title));
     
app.get('/', function(req,res){

    res.render('home.ejs');
});

//About us
app.get('/aboutus',function(req,res){
    res.render('aboutus.ejs');
});

//Gallery
app.get('/gallery',function(req,res){
    res.render('gallery.ejs');
});

//Contact us
app.get('/contactus',function(req,res){
    res.render('contactus.ejs'); 
});
//Home
app.get('/home', function(req,res){
    res.render('home.ejs');
});
//Products
app.get('/products',function(req,res){
    res.render('products.ejs'); 
})

app.post('/contact',function(req,res){
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var enquiry = req.body.enquiry
    new ContactSChema({
        name : name,
        email : email,
        subject: subject,
        enquiry: enquiry,
       }).save(function(err,user){
      if(err) 
        {
            console.log(err);
        }
        else
        {
            console.log('Registered contact Successfully');
            console.log(user);
            res.render('home.ejs');
            
        }  
    });
});


  
app.listen(port);
