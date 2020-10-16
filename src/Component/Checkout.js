import React,{useContext} from 'react';
import { Products } from '../ProductContext';


function Checkout() {
    const { state } = useContext(Products);
    return (
        <div>

            {
              state.map((product)=>{
                  return(
                      <div>
                      <h4>{product.name}</h4>
                      </div>
  
                  )
              })
            }
        </div>
              
        
    )
}

export default Checkout;