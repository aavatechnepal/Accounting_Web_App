const mongoose = require ('mongoose');
const journalEntry = new mongoose.Schema({
    // description: {
    //     type : String,
    //     required : true,
    // },
   
 
    date: {
        type: String,
        required : true,
    },
    select0: {
        type : String,
        required : true,
    },

    // accountType0: {
    //     type : String,
    //     required : true,
    // },

    amount0: {
        type: Number,
        required : true,
    },

    select1:{
        type : String,
        required: true,
        
    },
    // accountType1: {
    //     type : String,
    //     required : true,
    // },
    amount1: {
        type: Number,
        required : true,
    },
    // select2: {
    //     type : String,
    //     required : true,
    // },
    accountType2: {
        type : String,
       
    },
    amount2: {
        type: Number,
        
    }
})

const journalEntryData = mongoose.model('journalEntyUserData',journalEntry);
module.exports = journalEntryData;
