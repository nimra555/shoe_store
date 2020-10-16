import React , {useContext} from 'react';
import { Products } from '../ProductContext';
import { Tooltip } from '@material-ui/core';

console.log("Add products",Products);

function Addtocart({dataItem}){

  const {state,addProduct} = useContext(Products);
  const isTrue = state.find(item => item.name === dataItem.name);
 
    return(
        (!isTrue) ? <button onClick={() => addProduct(dataItem)}>Add to cart</button>
        : (<Tooltip title='Already in Cart'>
            <button>Add to cart</button>
        </Tooltip>
    )
    )
}

export default Addtocart;