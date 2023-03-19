import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-par">
                <div className="footer-par">
                    <div className="footer-line">
                        <ul className='li-par'>
                            <li className='mid-text'><Link to="/">Lamborghini</Link></li>
                            <li className='mid-text'><Link to="/Ferrari">Ferrari</Link></li>
                            <li className='mid-text'><Link to="/Porsche">Porsche</Link></li>
                            <li className='mid-text'><Link to="/Prices">Prices</Link></li>

                        </ul>
                    </div>
                    <div className="extra">
                        <h1>By:Nurman</h1>
                        <p>Thanks for watching</p>
                        <p>Goodbye</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;