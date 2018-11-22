var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var adminschema = new Schema({
     adminnam: {
        type: String,
        required: true
    },
 
    adminema: {
        type: String,
        required: true
    },
    
    adminpass: {
        type: String,
        required: true
    },
    
});
module.exports = mongoose.model('Adminschemas', adminschema);