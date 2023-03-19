import React from 'react';
import Aventador from '../aventador.webp'
import Huracan from '../huracan.webp'
import gt3rs from '../gt3rs.jpg'
import spyder from '../porsche918.jpg'
import LaFerrari from '../LaFerrari.jpg'
import Ferrari488 from '../ferrai 488.jpg'
const Prices = () => {
    return (
        <div>
            <div className="container">
                <div className="prices">
                    <div className="prices-par">
                        <img className="pr" src={Aventador} alt=""/>
                        <p> $507,353</p>
                    </div>
                    <div className="prices-par">
                        <img className="pr" src={Huracan} alt=""/>
                        <p> $206,295</p>
                    </div>
                    <div className="prices-par">
                        <img className="pr" src={gt3rs} alt=""/>
                        <p>$314,000</p>
                    </div>
                    <div className="prices-par">
                        <img className="pr" src={spyder} alt=""/>
                        <p>$168,000</p>
                    </div>
                    <div className="prices-par">
                        <img className="pr" src={LaFerrari} alt=""/>
                        <p>$1,420,000</p>
                    </div>
                    <div className="prices-par">
                        <img className="pr" src={Ferrari488} alt=""/>
                        <p>$524,900</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;