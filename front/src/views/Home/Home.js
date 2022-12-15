import React from 'react';
import GridColumn from '../../components/utils/GridColumn';
// @ts-ignore
import imagen1 from "./imagen1.jpeg"
import "./Home.css"
import Boton from '../../components/forms/Boton';


function Home() {
    return (
        <section className='home'>
            <div className='container grid'>
                <GridColumn className='headline'>
                    <h2 className='title'>Tus Pagos...</h2>
                    <h1 className='content'>RAPIDOS Y EFECTIVOS</h1>
                    <p className='supporting'>Manejar tu plata nunca había sido tan facil con en <b>Ullet</b></p>
                    <Boton style="fill">QUIERO MI CUENTA</Boton>
                </GridColumn>
                <GridColumn className='imagen1'>
                    <img src={imagen1}></img>
                </GridColumn>
            </div>
        </section>
    );
}

export default Home;