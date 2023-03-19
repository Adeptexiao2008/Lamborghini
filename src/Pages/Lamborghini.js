import React, {useState} from 'react';
import Aventador from '../aventador.webp'
import Huracan from "./huracan";

const Lamborghini = () => {
    const [price,setPrice]=useState(0)
    return (
        <main>
            <div className="container">
                <div className="lamb">
                    <div className="left">
                        <img className='aventador' src={Aventador} alt=""/>
                        <h1 className='lambo'>hELLO</h1>
                        <h2>{price}</h2>
                    </div>
                   <Huracan price={price}/>
                </div>
            </div>
        </main>
    );
};

export default Lamborghini;