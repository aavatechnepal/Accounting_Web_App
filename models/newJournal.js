
const mongoose = require ("mongoose");

const newSchema = new mongoose.Schema({
    //upper section
    journal1:{
        type: String,
        required : true,
    },
    dr:{
        type: String,
        required : true,
    },
    amount1:{
        type: String,
        required : true,
    },

    //**************below section*****************

    journal2:{
        type: String,
        required : true,
    },
    cr:{
        type: String,
        required : true,
    },
    amount2:{
        type: String,
        required : true,
    },
})

const hamroJournal = mongoose.model('newJournalData', newSchema);
module.exports = hamroJournal;