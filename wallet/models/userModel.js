import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "edad":{type:Number, require:true},
    "date":{type:Date, default:Date.now()}
})

export default mongoose.model("inicio",userModel);