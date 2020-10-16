import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home, About, Product, Productdetail , Header ,Page ,Footer} from './Component/index';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';

function Routes() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route path="/product/:id" component={Productdetail}></Route>  
          <Route path="/cart" component={Cart}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="*" component={Page}></Route>                     
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default Routes;
