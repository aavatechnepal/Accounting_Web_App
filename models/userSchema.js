const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    confPassword : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
    },
})

//hashing password
userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

const userData = mongoose.model('webData', userSchema);
module.exports = userData;