var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
     
   firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
    	type: String,
    	required: true
    },
    mobilenumber: {
    	type: String,
    	required: true
    },
    address: {
    	type: String,
    	required: true
    },
    profession: {
    	type: String,
    	required: true
    },
    
    
});
module.exports = mongoose.model('USerSchema', UserSchema);
