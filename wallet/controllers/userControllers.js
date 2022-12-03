import userModel from "../models/userModel.js";

//crae usuario
export async function createUser(req, res){
    const usuario = req.body;

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

    const {nombre} = req.params;
    let documento = null;

    try{
        documento = await userModel.find({"nombre":nombre});
    }catch(error){

        res.status(400);
        res.json(error.message);
        return;
    }

    res.json(documento);
    res.status(200);
    
}

export async function updateUser(req, res){

    const {id} = req.params;
    let documento = null;

    try{
        documento = await userModel.findOne({"_id":id});
    }catch(error){

        res.status(400);
        res.json(error.message);
        return;
    }

    documento.edad = 67
    documento.save();

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