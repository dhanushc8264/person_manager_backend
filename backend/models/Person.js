import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
   name : {
      type : String,
      required : true
   },

   age : {
    type : Number,
    required : true
   },

   gender : {
      type : String,
       enum: ['Male', 'Female', 'Other'],
      required : true
   },
   
   mobileno : {
      type : String,
      required : true
   }

})

export default mongoose.model("Person",PersonSchema);