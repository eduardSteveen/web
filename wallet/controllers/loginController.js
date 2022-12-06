import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";

const ACCESS_TOKEN = "63f6fceff7c78fe2ebc3941f19fe429b068b1ba0007a474dd4f28048d217dd38925ce909f9397b239866e4370ea23d6f7d4f90a1597adb3eaac322bf92c0e39a"

export default async function login(req, res){

    const {nombre, password} = req.headers;

    if(nombre == null || password == null){
        res.sendStatus(401)
        return
    }

    const usuario = await userModel.findOne({nombre})

    if(usuario==null){
        res.sendStatus(401)
        return
    }

    const valido = await bcrypt.compare(password, usuario.contraseña)

    if (valido){
        const token = jwt.sign(nombre, ACCESS_TOKEN)
        res.status(200).json({token})
    }else{
        res.sendStatus(401)
    }
}