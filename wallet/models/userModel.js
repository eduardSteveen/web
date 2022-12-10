import mongoose from "mongoose";

const ciudades = ["Barranquilla", "Bogota", "Medellin","Cali","Bucaramanga"]


const userSchema = mongoose.Schema({
    "nombre":{type:String, require:true, maxlength: 30, minlength: 3, unique:true, immutable:true},
    "contraseña": {type: String, require: true}
},{timestamps: true})

export default mongoose.model("inicio",userSchema);