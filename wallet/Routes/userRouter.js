import express from "express";
import { createUser, readUser,updateUser,deleteUser } from "../controllers/userControllers.js" 
import validateToken from "../Middlewares/validateToken.js"
import mwPrueba from "../Middlewares/mwPrueba.js";

const userRouter = express.Router()

//Crear
//POST
userRouter.post("/", mwPrueba, (req, res) =>{
    createUser(req, res)
})
//Leer
//GET
userRouter.get("/", validateToken, (req, res) =>{
    readUser(req, res)
})
//Actualizar
//PUT
userRouter.put("/:nombre", (req, res) =>{
    updateUser(req, res)
})
//Eliminar
//DELETE
userRouter.delete("/:id", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;