import React, {createContext, useReducer } from "react";
import ProductReducer from './ProductReducer';

// initial state
const Initialproduct  = [];

export const products=useContext(Initialproduct);

export function ProductProvider({ children }) {
    let [state, dispatch] = useReducer(ProductReducer, Initialproduct);
  
    function addProduct(shoe) {
      dispatch({
        type: "Add_Product",
        payload: {
          image:shoe.image,  
          price:shoe.price,
          description:shoe.description,
        //   id: trans.id,
        },
      });
    }
  
    function deleteProduct(id) {
      dispatch({
        type: "Delete_Product",
        payload: id,
      });
    }
  
  
  return (
      <products.Provider
        value={{
          Addproduct: state.product,
          addProduct,
          deleteProduct,
        }}
      >
       
        {children}
      </products.Provider>
    );
  }