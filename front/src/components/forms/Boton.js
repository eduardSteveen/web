import React from 'react';
import "./forms.css"

function Boton(props, onClick) {

    const {children} = props

    return (
        <button className='boton' onClick={onClick}>{children}</button>
    );
}

export default Boton;