import React from 'react';
import Button from "./button";

const Minihouse = ({products}) => {
    console.log(products)
    return (
        <div>
            {products.slice(0,3).map((el)=>(
                <div>
                <h2>{el.price}</h2>
                <Button text={'купить'}/>
                </div>
            ))}

        </div>
    );
};

export default Minihouse;