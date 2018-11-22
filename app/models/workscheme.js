var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var workschema = new Schema({
     
     idregg: {
        type: String,
        required: true
    },
     workallocation: {
        type: String,
        required: true
    },
    supername: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('Workschemas', workschema);
