import React, { createContext, useReducer } from "react";
import cartReducer from './ProductReducer';

// initial state
const Initialproduct  = [];

export const Products = useContext(Initialproduct);

export function ProductProvider({ children }) {
    let [state, dispatch] = useReducer(cartReducer, Initialproduct);
  
    // Add the Product from cart
    function addProduct(payload) {
      dispatch({
        type: "Add_Product",
        payload,
      });
    }
  
     // Remove the Product from cart
    function deleteProduct(payload) {
      dispatch({
        type: "Delete_Product",
        payload,
      });
    }
  
    function checkOut(){
      dispatch({
        type:'PAY',
      })
    }
  
  return (
      <Products.Provider
        value={{
           state,
          addProduct,
          deleteProduct,
          checkOut,
        }}
      >
       
        {children}
      </Products.Provider>
    );
  }