const mongoose = require ('mongoose');

const lastpage = new mongoose.Schema({
    phone : {
        type: String,
        required : true,
    },
    email : {
        type: String,
        required : true,
    },
    phone : {
        type: Number,
        required : true,
    },
})

const orglastpageData = mongoose.model('orglastData',lastpage);
module.exports = orglastpageData;