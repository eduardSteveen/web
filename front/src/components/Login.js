import React, {useState} from 'react';
import Boton from './forms/Boton';
import Input from './forms/Input';
import Flex from './utils/Flex';
import Gap from './utils/Gap';

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
            <Flex padding="2rem" borderRadius="1rem">
                <h1>mi App</h1>
                <Gap direction="vertical">1rem</Gap>
                <Input onChange={(val)=>setUser(val.target.value)}>user name</Input>
                <Gap direction="vertical">0.5rem</Gap>
                <Input type="password" onChange={(val)=>setPassword(val.target.value)}>password</Input>
                <Gap direction="vertical">3rem</Gap>
            <Boton type="submit">login</Boton>
        </Flex>
        </form>
    );
}

export default Login;