import React,{useContext} from 'react';
import {  makeStyles} from '@material-ui/core';
import { Products } from '../ProductContext';



const useStyles = makeStyles(() => ({
    root: {
      margin: '0 auto',
      maxWidth: 1200
    },
    heading: {
      margin: '0 auto',
      marginTop: 40,
      maxWidth: 200,
      textAlign: 'center'
    },
    empty: {
      margin: '0 auto',
      maxWidth: 300,
      marginTop: 100,
      textAlign: 'center'
    }
  }
  ))


function Checkout() {
    const classes = useStyles();
    const { state, checkOut} = useContext(Products);
    const productsCount  = state.length;
    const total = state.reduce((total,item)=>parseFloat((total + item.price)), 0);
    return (
        <div>
          {total}
          <button onClick={() => checkOut}>Checkout</button>
        </div>
      )
}


export default Checkout;