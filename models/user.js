const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(

    {

       name:{
           type:String,
           required:true
       },

       skill:{
           
        type:String,
        required:true,
           
       },

       phone:{
           type:Number,
           required:true
       },

       email:{
          
           type:String,
           required:true

       },

       experience:{
          
        type:Number,
        required:true

       }









    }






)

const Userdb = mongoose.model('Userdb',userSchema);

module.exports = Userdb;
