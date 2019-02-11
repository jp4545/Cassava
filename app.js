var express = require('express');
var session = require('express-session'); 
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var saltRounds = 10;
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

//Home page with session tracking
app.get('/home', function(req,res){
    // sess = req.session;
    // if(sess.email)
    // {
    res.render('home.ejs');
    // }
    // else
    // {
    // console.log('Please login again');
    // res.redirect('/login');
    // }
});

// //Redirect to register page
// app.get('/register',function(req,res){
//     res.render('register.ejs');
// });

// //Redirect to login page
// app.get('/login',function(req,res){

//     res.render('login.ejs');
// });

// app.get('/logout',function(req,res){
//     req.session.destroy(function(err,logoutt){
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             res.redirect('/login');
//         }
//     });
// });

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

// app.post('/register',function(req,res){
//     bcrypt.hash(req.body.password, saltRounds, function (err,   hash)
//     {
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     var email = req.body.email;
//     var password = hash; 
//     var mobilenumber = req.body.mobilenumber;
//     var address = req.body.address;
//     var profession = req.body.profession;

//     new Registerschema({
//         firstname : firstname,
//         lastname : lastname,
//         email: email,
//         password: password,
//         mobilenumber: mobilenumber,
//         address: address,
//         profession: profession

//     }).save(function(err,user){
//       if(err) 
//         {
//             console.log(err);
//         }
//         else
//         {
//             console.log('Registered Successfully');
//             console.log(user);
//             res.render('home.ejs');
            
//         }  
//     });
//   });  
// });


// app.post('/login', function(req, res){

//     Registerschema.findOne({email: req.body.email}, function(err, users) {
//     if( !err && users) {
//         bcrypt.compare(req.body.password, users.password, function (err, result) {
//         if (result == true) {
//             sess = req.session;        
//             console.log('Welcome user');
//             sess.email = users.email;
//             console.log(sess.email);
//             res.redirect('/home');
//         } else {
//             console.log(result);
//          console.log('Incorrect password');
//          res.redirect('/login')
        
//         }
//       });
//     }

//     else { 
//             console.log("authenticated failed");
//          }

// });

// });
  
  
  
app.listen(port);
