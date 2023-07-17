const mongoose = require ('mongoose');
const accountDetails = new mongoose.Schema({
    panNumber : {
        type : Number,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    registerAddress : {
        type : String,
        required : true,

    }

})

const accountData = mongoose.model("UserAccountData", accountDetails);
module.exports = accountData;




