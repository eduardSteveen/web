import React from 'react';
import Boton from "./components/forms/Boton";
import "./assets/global.css"
import Flex from './components/utils/Flex';
import Input from './components/forms/Input';
import Gap from './components/utils/Gap'
import Login from './components/Login';

function App() {
    return (<div>
       <Login></Login>
       </div>
    );
}

function saludar(nombre){
    alert("hola "+nombre)
}

export default App;