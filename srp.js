var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var bcrypt = require('bcrypt');
var saltRounds = 10;
var config      = require('./config/database'); // get db config file
var Registerschema = require('./app/models/userschema');
var apiRoutes = express.Router();
var path = require('path');
var port = process.env.PORT || 9000;
var fs = require('fs');
var pass;
 
var i=0;
var j=0;
var z=0;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect the api routes under /api/*
app.use('/', apiRoutes);
 
// log to console
app.use(express.static("public"));
app.use('/css', express.static('public'))
app.use('/js', express.static('public'))
// Use the passport package in our application
mongoose.connect(config.database);
// pass passport for configuration
app.set('view engine', 'ejs');



app.get('/', function(req,res){
    res.render('login.ejs');
});

app.get('/register',function(req,res){
    res.render('register.ejs');
});

app.get('/login',function(req,res){
    res.render('login.ejs');
})

app.post('/register',function(req,res){
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash)
    {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = hash; 
    var mobilenumber = req.body.mobilenumber;
    var address = req.body.address;
    var profession = req.body.profession;

    new Registerschema({
        firstname : firstname,
        lastname : lastname,
        email: email,
        password: password,
        mobilenumber: mobilenumber,
        address: address,
        profession: profession

    }).save(function(err,user){
      if(err) 
        {
            console.log(err);
            
        }
        else
        {
            console.log('Registered Successfully');
            console.log(user);
            res.render('home.ejs');
            
        }  
    });
  });  
});

app.post('/login',function(req, res)
{ 
  Registerschema.findOne({user: req.body.email}, function(err, users) {
    if( !err && users ) {

        bcrypt.compare(req.body.password, users.password, function (err, result) {
        if (result == true) {
            res.redirect('/home.ejs');
        } else {
         res.send('Incorrect password');
         res.redirect('/');
        }
      });

    }

    else { 
        res.render('login.ejs',{message:'Invalid Credentilas'}); 
    }

});

});


  
  
  
app.listen(port);
