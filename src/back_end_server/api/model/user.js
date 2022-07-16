
/**
 * CSCI 4177 Assignment 3 
 * schema and model for User 
 * developed by xinlong
 */

const mongoose = require("mongoose");
//Create "User" schema and model according to proposal 
const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    email: { type:String, require:true},
    password:{ type:String, require:true}

    
});


module.exports = mongoose.model('User', userSchema, 'User'); //last paremeter avoid "s"