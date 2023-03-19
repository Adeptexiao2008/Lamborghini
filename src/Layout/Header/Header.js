import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="mid-line">
                    <ul className='li-parent'>
                        <li className='mid-text'><Link to="/">Lamborghini</Link></li>
                        <li className='mid-text'><Link to="/Ferrari">Ferrari</Link></li>
                        <li className='mid-text'><Link to="/Porsche">Porsche</Link></li>
                        <li className='mid-text'><Link to="/Prices">Prices</Link></li>
                    </ul>
                </div>




            </div>
        </header>
    );
};

export default Header;