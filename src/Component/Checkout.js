import React,{useContext} from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Products } from '../ProductContext';
import Cart from './Cart';


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
    const { state, deleteProduct, checkOut} = useContext(Products);
    const productsCount  = state.length;
    const total = state.reduce((total,item)=>(total + item.price), 0);
    return (
        <div>
          <Typography variant='h3' className={classes.heading}>Cart</Typography>
          {(productsCount) ? (
            <div className={classes.root}>
              <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                  {state.map((product, index) => (
                    <Cart product={product} key={index} removeItem={deleteProduct} />
                  ))}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Checkout productsCount={productsCount} total={total} payment={checkOut} />
                </Grid>
              </Grid>
            </div>) : <Typography variant='h6' className={classes.empty}>Your Cart is Empty</Typography>
          }
        </div>
      )
}


export default Checkout;