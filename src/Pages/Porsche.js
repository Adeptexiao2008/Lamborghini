import React from 'react';
import gt3rs from '../gt3rs.jpg'
import spyder from '../porsche918.jpg'
const Porsche = () => {
    return (
        <main>
            <div className="container">
                <div className="porsh">
                    <div className="porshl">
                        <img className='porsch' src={gt3rs} alt=""/>
                        <h1 className='porsch-text'>Porsche GT3RS</h1>
                    </div>
                    <div className="porshr">
                        <img className='porsch' src={spyder} alt=""/>
                        <h1 className='porsch-text'>Porsche 918 Spyder</h1>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Porsche;