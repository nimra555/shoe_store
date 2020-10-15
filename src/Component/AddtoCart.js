import React , {useContext} from 'react';
import { Products } from '../ProductContext';
import { Tooltip } from '@material-ui/core';

function Addtocart({dataItem}){
  const [add,addProduct] = useContext(Products);
  const isTrue = add.find(item => item.id === dataItem.id);
 
    return(
        (!isTrue) ? <button onClick={() => addProduct(dataItem)}>Add to cart</button>
        : (<Tooltip title='Already in Cart'>
            <button>Add to cart</button>
        </Tooltip>
    )
    )
}

export default Addtocart;