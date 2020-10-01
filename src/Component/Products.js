import React from 'react';
import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';


function Product() {

  console.log(Shoes);

  return (
    <div>
      <h1>Welcome to Product</h1>
      {Object.keys(Shoes).map((keyName,index) => {
        const shoe = Shoes[keyName];
        return(
          <Link key={index} to={`/product/${keyName}`}>
            <img src={shoe.img} height={150}/>
            <h3>{shoe.name}</h3>
          </Link>  
        )
      })}
    </div>
  );
}

export default Product;