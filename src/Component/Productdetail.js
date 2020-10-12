import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';
import './Style.css';


function Productdetail() {
  let { id } = useParams();
  const shoe = Shoes[id];
  const [productItem,setproductItem] = useState(id);
  console.log(shoe);


  if (!shoe)
    return <h2>Product not found</h2>
  return (
    <div className="flex-container">
      <div key={id}>
        <img src={shoe.img} height={300} />
      </div>
      <div>
      <h3>{shoe.name}</h3>
      <p>{shoe.description}</p>
      <button onClick={()=>console.log("add")}>Add to cart</button>
      </div>
    </div>
  );
}

export default Productdetail;