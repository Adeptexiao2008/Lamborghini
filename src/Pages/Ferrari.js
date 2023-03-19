import React from 'react';
import LaFerrari from '../LaFerrari.jpg'
import Ferrari488 from '../ferrai 488.jpg'
const Ferrari = () => {
    return (
        <main>
<div className="container">
    <div className="Ferrari-par">
        <div className="left-fer">
            <img className='feri' src={LaFerrari} alt=""/>
            <h1 className='fer-text'>LaFerrari</h1>
        </div>
        <div className="right-fer">
            <img className='feri' src={Ferrari488} alt=""/>
            <h1 className='fer-text'>Ferrari 488 pista</h1>
        </div>
    </div>
</div>
        </main>
    );
};

export default Ferrari;