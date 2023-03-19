import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import Minihouse from "./minihouse";
import Button from "./button";

const House = ({text}) => {
    const [products,setproducts]=useState([])
    const [state,setState] = useState(0)


    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
            .then(({data})=>setproducts(data))
    },[])
    return (
        <div className='house'>

            {products.map((el)=>(
                    <div className='card' key={el.id}>
                        <img className='card-img' src={el.image} alt=""/>
                        <h1 className='card-h1'>{el.title}</h1>
      <div className="card-info">


          <h4 className='card-price'>{el.price}</h4>
      </div>

                    </div>
            ))}

        </div>
    );
};

export default House;