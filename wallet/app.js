import express from "express";
import mongoose from "mongoose";
import mwPrueba from "./Middlewares/mwPrueba.js";
import userRouter from "./routes/userRouter.js";
import testRouter from "./Routes/testRouter.js";
import loginRouter from "./Routes/loginRouter.js";

const app = express()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor está ejecutandose correctamente.");
})

mongoose.connect("mongodb+srv://eduard:eduard@cluster0.cz5cjtl.mongodb.net/inicio?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
    console.log("se ha conectado la base de datos")
    }
})

app.use(express.json())
app.use(mwPrueba)
app.use("/user", userRouter)
app.use("/login", loginRouter)
app.use("/test", testRouter)