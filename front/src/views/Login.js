import React, {useState} from 'react';
import Boton from '../components/forms/Boton';
import Input from '../components/forms/Input';

function Login() {

    async function onSubmit(evento){
        evento.preventDefault()

   
        const res = await fetch("http://localhost:8080/login",{
            method:"GET",
            mode: "cors",
            headers:{
                user:user,
                password:password
            }
        })

        if(res.ok){
            const data = await res.json()
            alert("tu token es: "+data.token)
        }else{
            alert(res.status)
        } 
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (  
        <form onSubmit={(evento)=>onSubmit(evento)}>
                <h1>mi App</h1>
                <Input onChange={(val)=>setUser(val.target.value)}>user name</Input>
                <Input type="password" onChange={(val)=>setPassword(val.target.value)}>password</Input>
                <Boton type="submit">login</Boton>
        </form>
    );
}

export default Login;