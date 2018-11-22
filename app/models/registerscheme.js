
var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var registerschema = new Schema({
     name: {
        type: String,
        required: true
    },
 
    username: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    dateofjoining: {
        type: String,
        required: true
    },
    fathername: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    presentaddress: {
        type: String,
        required: true
    },
    permanentaddress: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
    researchtopic: {
        type: String,
        required: true
    },
     researchabstract: {
        type: String,
        required: true
    },
    scholarship: {
        type: String,
        required: true
    },
    awardingbody: {
        type: String,
        required: true
    },
    teaching: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    research: {
        type: String,
        required: true
    },
    internationalseminar: {
        type: String,
        required: true
    },
    nationalseminar: {
        type: String,
        required: true
    },
    nationaljournals: {
        type: String,
        required: true
    },
    nationalconference: {
        type: String,
        required: true
    },
    internationalconference: {
        type: String,
        required: true
    },
    internationaljournals: {
        type: String,
        required: true
    },
    nationalworkshops: {
        type: String,
        required: true
    },
    internationalworkshops: {
        type: String,
        required: true
    },
    others: {
        type: String,
        required: true
    },
     internationalseminar1: {
        type: String,
        required: true
    },
    nationalseminar1: {
        type: String,
        required: true
    },
    nationalconference1: {
        type: String,
        required: true
    },
    internationalconference1: {
        type: String,
        required: true
    },
    nationalworkshops1: {
        type: String,
        required: true
    },
    internationalworkshops1: {
        type: String,
        required: true
    },
    researchsupervisior: {
        type: String,
        required: true
    },
    communicationaddress: {
        type: String,
        required: true
    },
     
    supervisiortelephone: {
        type:String,
        required: true
    },
    supervisiormobile: {
        type: String,
        required: true
    },
    supervisioremail: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Registerschemas', registerschema);