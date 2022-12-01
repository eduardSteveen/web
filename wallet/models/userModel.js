import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "edad":Number
})

export default mongoose.model("inicio",userModel);