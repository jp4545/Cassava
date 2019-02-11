var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
     
   name: {
        type: String,
        required: true
    },
   email: {
        type: String
    },
    subject: {
    	type: String,
    	required: true
    },
    enquiry: {
    	type: String,
    	required: true
    },
    
    
});
module.exports = mongoose.model('Contactschema', ContactSchema);
