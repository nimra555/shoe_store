import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';



function Productdetail() {
  let { id } = useParams();
  const shoe = Shoes[id];
  console.log(shoe);

  if (!shoe)
    return <h2>Product not found</h2>
  return (
    <div>
      Productdetail
      <div key={id}>
        <img src={shoe.img} height={150} />
        <h3>{shoe.name}</h3>
      </div>
    </div>
  );
}

export default Productdetail;