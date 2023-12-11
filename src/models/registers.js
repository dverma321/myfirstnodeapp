const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    fullname : {
        type:String,
        required: true
    },

    email : {
        type:String,
        required: true,
        unique: true
    },

    mobile : {
        type:String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
        required: true
    },

    password : {
        type:String,
        required: true
    },

    confirmpassword: {
        type: String,
        required: true
    }    

});

// now we need to create collections

// its the database -> collectionname && its name should be capital and singular form 

const Register = new mongoose.model("Register", customerSchema);
module.exports = Register;