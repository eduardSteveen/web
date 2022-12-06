import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

//crae usuario
export async function createUser(req, res){
    const usuario = req.body;
    const {contraseña} = usuario

    const contraseñaencriptada = await bcrypt.hash(contraseña,10);

    usuario.contraseña = contraseñaencriptada

    let documento = null

    try{
        documento = await userModel.create(usuario)
    }catch(error){
        res.status(400)
        res.json(error.message)
        return;
    }
    

    res.status(201)
    res.send(documento)
}

//leer usuario
export async function readUser(req, res){

    const {nombre} = req;
    let documento = null;

    try{
        documento = await userModel.find({nombre});
    }catch(error){

        res.status(400);
        res.json(error.message);
        return;
    }

    res.json(documento);
    res.status(200);
    
}

//actualizar
export async function updateUser(req, res){

    const {nombre} = req.params;
    const {cambios} = req.body

    let documento = null;

    try{
        documento = await userModel.updateOne({
            nombre
        },
            cambios,{ runValidators: true}
        );
    }catch(error){

        res.status(400);
        res.json(error.message);
        return;
    }

    res.json(documento);
    res.status(200);

}

//eliminar
export async function deleteUser(req, res){

    const {id} = req.params;
    let documento = null;

    try{
        documento = await userModel.findOneAndDelete({"_id":id});
    }catch(error){

        res.status(400);
        res.json(error.message);
        return;
    }

    res.sendStatus(200)
}