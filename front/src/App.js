import React, {useState} from 'react';
import Boton from "./components/forms/Boton";
import "./assets/global.css"
import Login from './components/Login';

function App() {

    const [contador, setContador] = useState(0);

    function IncrementarContador(){
        setContador(contador+1)
    }


    return (
        <div>
        <Login></Login>
        <p>Contador: {contador}</p>
        <Boton onClick={IncrementarContador}>Incrementar Contador</Boton>
       </div>
    );
}

export default App;