import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoes from './../shoes.json';
import { Link } from 'react-router-dom';
import './Style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function Product() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="heade">Welcome to Product</h1>
      <Grid container spacing={3}>
      {Object.keys(Shoes).map((keyName,index) => {
        const shoe = Shoes[keyName];
        return( 
        <Grid item xs={12} sm={4}>
          <Link key={index} to={`/product/${keyName}`}>

          <Paper className={classes.paper}  elevation={3}> <img src={shoe.img} height={150}/>
          <h4>{shoe.name}</h4>
          </Paper>
          </Link>
        </Grid>
           
        )
      })}
      </Grid>
    </div>
  );
}

export default Product;


