import React from 'react';

//@ts-ignore
import descarga from "./descarga.png"

function Logo() {

    const imgStyle = {
        width: "34px",
        height: "34px"
    }

    const style = {
        alingItems: "center",
        gap: "0.5rem"
    }

    return ( 
        <div className='logo flex' style={style}>
            <img src={descarga} style={imgStyle}></img>
            <h1>Ullet</h1>
        </div>
     );
}

export default Logo;