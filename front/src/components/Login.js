import React from 'react';
import Boton from './forms/Boton';
import Input from './forms/Input';
import Flex from './utils/Flex';
import Gap from './utils/Gap';

function Login() {
    return (  
        <Flex padding="2rem" borderRadius="1rem">
            <p>primer parrafo</p>
            <Gap direction="vertical">1rem</Gap>
            <Input>user name</Input>
            <Input type="password">password</Input>
            <Boton>login</Boton>
        </Flex>
    );
}

export default Login;