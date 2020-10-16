import React,{useContext} from 'react';
import { Products } from '../ProductContext';


function Cart() {
    const { state , deleteProduct , checkOut} = useContext(Products);
    return (
        <div>

            {
              state.map((product)=>{
                  return(
                      <div>
                      <img src={product.img} alt="shoe" height={100}/>  
                      <h4>{product.name}</h4>
                      <strong>{product.price}</strong>
                      <button onClick={deleteProduct}>remove</button>
                      <button onClick={checkOut}>Checkout</button>
                      </div>
  
                  )
              })
            }
        </div>
              
        
    )
}

export default Cart;