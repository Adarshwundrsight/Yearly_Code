import mongoose from "mongoose";

const schema=new mongoose.Schema({
    code: { 
        type: String, 
        require:true
        
      },
     count: { 
        type: Number, 
        default: 0
       },
})
export const OTP=mongoose.model("Yearlyotp ",schema)