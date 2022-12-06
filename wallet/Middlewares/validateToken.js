import jwt from "jsonwebtoken"

const ACCESS_TOKEN = "63f6fceff7c78fe2ebc3941f19fe429b068b1ba0007a474dd4f28048d217dd38925ce909f9397b239866e4370ea23d6f7d4f90a1597adb3eaac322bf92c0e39a"

export default (req, res, next)=>{
    const { token } = req.headers

    const nombre = jwt.verify(token, ACCESS_TOKEN)

    if(nombre == null){
        res.sendStatus(401)
        return
    }

    req.nombre = nombre

    next()
}