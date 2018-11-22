var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var config      = require('./config/database'); // get db config file
var Registerschema = require('./app/models/registerscheme');
var Workschema = require('./app/models/workscheme');
var Adminschema = require('./app/models/adminscheme');
var apiRoutes = express.Router();
var path = require('path');
var port = process.env.PORT || 9000;
var fs = require('fs');
var pass; //present level of the user 
var i=0;
var j=0;
var z=0;
var fn1,rn1,ps1,doj1,fsn1,dob1,edu1,genderr1,paddress1,peaddress1,phno1,emai1;
var rt1,ra1,fs1,ab1,tch1,ind1,res1,ns1,is1,nj1,nc1,ic1,ij1,nw1,iw1,ot1,ise1,nse1,ncs1,ics1,nws1,iws1;
var Namee,Un,Doj,Fs,Dob,Edu,Gen,Pre,Per,Phno,Ema;
var Rt,Ra,Sc,Ab,Te,In,Re,Is,Nc,Nw,Ns,Ic,Iw,Nj,Ij,Ot,Is1,Nc1,NW1,Ns1,Ic1,Iw1;
var Rs,Ca,Rt,Rm,Re;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect the api routes under /api/*
app.use('/', apiRoutes);
 
// log to console
app.use(express.static("public"));
app.use('/css', express.static('public'))
app.use('/css/fonts', express.static('public'))
// Use the passport package in our application
mongoose.connect(config.database);



// pass passport for configuration
app.set('view engine', 'ejs');

app.post('/profile', function(req, res){
  
  
  
  Registerschema.find({}).exec(function(err, obj){
    var flag=0;
    for(;i>=0;i++)
    {

      if(obj[i].username==req.body.lguser && obj[i].password==req.body.lgpass)
      {	
        console.log("authenticated correct");

                             Namee=obj[i].name;
                             Un=obj[i].username;
                             Doj=obj[i].dateofjoining;
                             Fs=obj[i].fathername;
                             Dob=obj[i].dateofbirth;
                             Edu=obj[i].education;
                             Gen=obj[i].gender;
                             Pre=obj[i].presentaddress;
                             Per=obj[i].permanentaddress;
                             Phno=obj[i].phonenumber;
                             Ema=obj[i].email;
                             Rt=obj[i].researchtopic;
                             Ra=obj[i].researchabstract;
                             Sc=obj[i]. scholarship;
                             Ab=obj[i].awardingbody;
                             Te=obj[i].teaching;
                             In=obj[i].industry;
                             Re=obj[i]. research;
                             Is=obj[i].internationalseminar;
                             Ns=obj[i]. nationalseminar;
                             Nj=obj[i].nationaljournals;
                             Nc=obj[i].nationalconference;
                             Ic=obj[i].internationalconference;
                             Ij=obj[i].internationaljournals;
                             Nw=obj[i]. nationalworkshops;
                             Iw=obj[i].internationalworkshops;
                        
                             Ot=obj[i].others;
                             Is1=obj[i].internationalseminar1;
                             Ns1=obj[i].nationalseminar1;
                             Nc1=obj[i].nationalconference1;
                             Ic1=obj[i].internationalconference1;

                             Nw1=obj[i].nationalworkshops1;
                             Iw1=obj[i].internationalworkshops1;
                             Rs=obj[i].researchsupervisior;
                             Ca=obj[i].communicationaddress;
                             St=obj[i].supervisiortelephone;
                             Sm=obj[i].supervisiormobile;
                             Se=obj[i].supervisioremail;
                             res.render('profile.ejs',{Namee1:Namee,
                             Un1:Un,
                             Doj1:Doj,
                             Fs1:Fs,
                             Dob1:Dob,
                             Edu1:Edu,
                             Gen1:Gen,
                             Pre1:Pre,
                             Per1:Per,
                             Phno1:Phno,
                             Ema1:Ema
                              });


         flag=0;
         break;
      }
      if(err)
      {
         console.log("authenticated failed");
         res.render('schlog.ejs',{message:'login failed'});
          
      }
      else{
        flag=1;
      }
    
    }
     
       if(flag==1)
           res.render('schlog.ejs',{message:'login failed'});




     });
});
app.get('/p', function(req, res){
    res.render('profile.ejs',{Namee1:Namee,
                             Un1:Un,
                             Doj1:Doj,
                             Fs1:Fs,
                             Dob1:Dob,
                             Edu1:Edu,
                             Gen1:Gen,
                             Pre1:Pre,
                             Per1:Per,
                             Phno1:Phno,
                             Ema1:Ema
                              });

});

app.get('/p1', function(req, res){
    res.render('profile1.ejs',{
                             Namee1:Namee,
                             Rt1:Rt,
                             Ra1:Ra,
                             Sc1:Sc,
                             Ab1:Ab,
                             Te1:Te,
                             In1:In,
                             Re1:Re,
                             Is1:Is,
                             Ns1:Ns,
                             Nj1:Nj,
                             Nc1:Nc,
                             Ic1:Ic,
                             Ij1:Ij,
                             Nw1:Nw,
                             Iw1:Iw,
                        
                             Ot1:Ot,
                             Is2:Is1,
                             Ns2:Ns1,
                             Nc2:Nc1,
                             Ic2:Ic1,

                             Nw2:Nw1,
                             Iw2:Iw1
                         });
                             
});

app.get('/p2', function(req, res){
    res.render('profile2.ejs',{
    	                     Namee1:Namee,
                             Rs1:Rs,
                             Ca1:Ca,
                             St1:St,
                             Sm1:Sm,
                             Se1:Se


    });
});


app.get('/', function(req, res){
    res.render('firsthome.ejs');
});

app.post('/scholarlogin',function(req, res)
{ res.render('schlog.ejs',{message:''});

});

app.post('/adminlogin',function(req, res)
{ res.render('admin.ejs',{message:''});

});

app.post('/signupadd',function(req, res)
{ res.render('signupad.ejs');

});

app.post('/updateop',function(req, res)
{ res.render('uphome.ejs');

});


app.post('/sendwork',function(req, res)
{ 
new Workschema({
    idregg:req.body.rsiddd,
    workallocation:req.body.wa,
    supername:req.body.supervise,
    }).save(function(err, doc){
    if(err) console.log(err);
    else  
     {console.log("success of notification");
      res.render('adminworkallocview.ejs');
    }
 
  });
});


app.get('/logout',function(req, res)
{   var log=0;
	if(log==0){
	 res.render('schlog.ejs',{message:'You are Sucessfully logged out'});
	}

});

/*app.get('/workpro',function(req, res)
{   var wfalg=0;
	Workschema.find({}).exec(function(err, obj){
	for(;z>=0;z++)
    {
      
      if(obj[z].idregg==Un)
      {
         res.render('workallocation.ejs',{
         	 Namee1:Namee,
         	 workprof1:obj[z].workallocation
         });
       wflag=0;
        break;
      }
   
     else
     {
     	wflag=1;

     }

   }
if(wflag==1)
{
	res.render('workallocation.ejs',{
         	 Namee1:Namee,
         	 workprof1:'None'
         });

}

 
     });

});
*/
app.get('/workpro',function(req, res)
{   
	 res.render('workallocation.ejs',{Namee1:Namee});
	

});
app.post('/checkadmin',function(req, res)
{ 
	 Adminschema.find({}).exec(function(err, obj){
    var flag1=0;
    for(;j>=0;j++)
    {
      
      if(obj[j].adminema==req.body.admineemail && obj[j].adminpass==req.body.adminppassword)
      {
        console.log("admin authenticated correct");
         res.render('adselect.ejs');
         flag1=0;
         break;
      }
       if(err)
      {  flag1=1;
         console.log("admin authenticated failed");
          
      }
      
    
    }
     
       if(flag1==1)
           res.render('admin.ejs',{message:'Sry your are not an admin!!'});




     });


});



app.post('/adsign',function(req, res)
{ 
    new Adminschema({
    adminnam:req.body.adminname,
    adminema:req.body.adminemail,
    adminpass:req.body.adminpassword
    }).save(function(err, doc){
    if(err) console.log(err);
    else  
     {console.log("success of admin signup");
      res.render('admin.ejs',{message:'You are registered as admin Now!!'});
    }
 
  });

});


app.post('/signup',function(req, res)
{ 
    res.render('reg1.ejs');
});

app.post('/workall',function(req, res)
{ 
    res.render('work.ejs',{message:''});
});

app.post('/viewall',function(req, res)
{ 
    Registerschema.find({}).exec(function(err,obj)
    { res.json(obj);

    });
});

app.post('/viewallbywork',function(req, res)
{ 
    Workschema.find({}).exec(function(err,obj)
    { res.json(obj);

    });
});

app.post('/fetchreg',function(req, res)
{    
    Registerschema.find({username:req.body.rg1}).exec(function(err,obj)
    { 	console.log(obj)
    	res.json(obj);

    });
});

app.post('/fetchregbywork',function(req, res)
{    
    Workschema.find({idregg:req.body.rwag1}).exec(function(err,obj)
    { 	console.log(obj)
    	res.json(obj);

    });
});

app.post('/fetchwork',function(req, res)
{    
    Workschema.find({idregg:Un}).exec(function(err,obj)
    { 	
    	res.json(obj);
    	``
    });
});
app.post('/fetchscmail',function(req, res)
{   
    Registerschema.find({email:req.body.scm1}).exec(function(err,obj)
    { res.json(obj);

    });
});
app.post('/fetchsmail',function(req, res)
{   
    Registerschema.find({supervisioremail:req.body.sm1}).exec(function(err,obj)
    { res.json(obj);

    });
});
app.post('/fetchsname',function(req, res)
{   
    Registerschema.find({researchsupervisior:req.body.snm1}).exec(function(err,obj)
    { res.json(obj);

    });
});


app.post('/addapro',function(req, res)
{ 
     fn1=req.body.fn;
    rn1=req.body.rn;
     ps1=req.body.ps;
     doj1=req.body.doj;
     fsn1=req.body.fsn;
     dob1=req.body.dob;
     edu1=req.body.edu;
     genderr1=req.body.gender;
     paddress1=req.body.paddress;
     peaddress1=req.body.peaddress;
     phno1=req.body.phno;
     emai1=req.body.emai;
     
  
  res.render('reg2.ejs');  

});


app.post('/addapd',function(req, response)
{ 
    rt1=req.body.rt;
     ra1=req.body.ra;
     fs1=req.body.fs;
     ab1=req.body.ab;
     tch1=req.body.tch;
     ind1=req.body.ind;
     res1=req.body.res;
     ns1=req.body.ns;
     is1=req.body.is;
     nj1=req.body.nj;
     nc1=req.body.nc;
     ic1=req.body.ic;
     ij1=req.body.ij;
     nw1=req.body.nw;
     iw1=req.body.iw;
     ot1=req.body.ot;
     ise1=req.body.ise;
     nse1=req.body.nse;
     ncs1=req.body.ncs;
     ics1=req.body.ics;
     nws1=req.body.nws;
     iws1=req.body.iws;


   response.render('reg3.ejs');

});
app.post('/addup',function(req, res)
{ 
  
    
    new Registerschema({
    name:fn1,
    username:rn1,
    password:ps1,
    dateofjoining:doj1,
    fathername:fsn1,
    dateofbirth:dob1,
    education:edu1,
    gender:genderr1,
    presentaddress:paddress1,
    permanentaddress:peaddress1,
    phonenumber:phno1,
    email:emai1,
    researchtopic:rt1,
    researchabstract:ra1,
    scholarship:fs1,
    awardingbody:ab1,
    teaching:tch1,
    industry:ind1,
    research:res1,
    nationalseminar:ns1,
    internationalseminar:is1,
    nationaljournals:nj1,
    nationalconference:nc1,
    internationalconference:ic1,
    internationaljournals:ij1,
    nationalworkshops:nw1,
    internationalworkshops:iw1,
    others:ot1,
    internationalseminar1:ise1,
    nationalseminar1:nse1,
    nationalconference1:ncs1,
    internationalconference1:ics1,
    nationalworkshops1:nws1,
    internationalworkshops1:iws1,
    researchsupervisior:req.body.rs,
    communicationaddress:req.body.caddress,
    supervisiortelephone:req.body.tn,
    supervisiormobile:req.body.mb,
    supervisioremail:req.body.ea
  }).save(function(err, doc){
    if(err) console.log(err);
    else  
     {console.log("success of signup");
      res.render('schlog.ejs',{message:'You are registered Now!!'});
    }
 
  });
 
});


app.listen(port);
