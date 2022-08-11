const mongoose = require('mongoose');
const DasisSchema = mongoose.Schema({
    nama : {
        type : String,
        required : true
    },
    tanggallahir : {
        type : String,
        required : true
    },
    jeniskelamin : {
        type : String,
        required : true
    },
    hobi : String ,
    create_date : {
        type : Date,
        default : Date.now,
    }
});

const Dasis = module.exports = mongoose.model('dasis',DasisSchema);
module.exports.get = function(callback,limit){
    Dasis.find(callback).limit(limit);
}
