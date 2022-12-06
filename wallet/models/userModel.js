import mongoose from "mongoose";
import genKey from "../utils/keyGenerator.js"

const profileSchema = mongoose.Schema({
    "mensaje": String,
    "estado": String
})

const ciudades = ["Barranquilla", "Bogota", "Medellin","Cali","Bucaramanga"]

function validacionPar(v){
    if(v %2==0){
        return true;
    }else{
        return false;
    }
}

const userSchema = mongoose.Schema({
    "id": {type: String, default:()=>genKey(10), set: ()=>genKey(10), immutable:true},
    "nombre":{type:String, require:true, maxlength: 30, minlength: 3, unique:true, immutable:true},
    "edad": {type: Number, min: 18, max:99, require:true},
    "ciudad":{type:String, require:true, enum:ciudades},
    "activo": Boolean,
    "contraseña": {type: String, require: true}
},{timestamps: true})

export default mongoose.model("inicio",userSchema);