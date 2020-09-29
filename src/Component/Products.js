import React from 'react';
import Shoes from './../shoes.json';

function Product() {

  console.log(Shoes);

  return (
    <div>
      <h1>Welcome to Product</h1>
      {Object.keys(Shoes).map(keyName => {
        return(
          <div key={keyName}>
            <h1>{keyName["image"]}</h1>
          </div>  
        )
      })}
    </div>
  );
}

export default Product;