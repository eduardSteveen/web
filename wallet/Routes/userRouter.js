import express from "express";
import { createUser, readUser,updateUser,deleteUser } from "../controllers/userControllers.js" 

const userRouter = express.Router()

//Crear
//POST
userRouter.post("/", (req, res) =>{
    createUser(req, res)
})
//Leer
//GET
userRouter.get("/:nombre", (req, res) =>{
    readUser(req, res)
})
//Actualizar
//PUT
userRouter.put("/:id", (req, res) =>{
    updateUser(req, res)
})
//Eliminar
//DELETE
userRouter.delete("/:id", (req, res) =>{
    deleteUser(req, res)
})

export default userRouter;