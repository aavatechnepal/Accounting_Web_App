const mongoose = require ('mongoose');
const addneworg = new mongoose.Schema({
    companyName : {
        type : String,
        required : true,
    },
    displayName : {
        type : String,
        required : true,
    },
    
})

const addOrg = mongoose.model('addneworgData', addneworg);
module.exports = addOrg;