import React, { useContext, useState } from "react";
import { products } from "../ProductContext";

function Cart({props}) {
  let { Addproduct,addProduct,deleteProduct, } = useContext(
    products
  );
  return (
    <div>
      Cart
    </div>
  );
}

export default Cart;