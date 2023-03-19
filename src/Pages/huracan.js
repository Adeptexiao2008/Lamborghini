import React from 'react';
import Huracan1 from '../huracan.webp'
const Huracan = ({price}) => {
    return (
        <div className="right">
            <img className='huracan' src={Huracan1} alt=""/>
            <h1 className='lambo'>Lamborghini Huracan</h1>

        </div>
    );
};

export default Huracan;