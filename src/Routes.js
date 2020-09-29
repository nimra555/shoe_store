import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home, About, Product, Productdetail , Header ,Page ,Footer} from './Component/index';

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
          <Route path="*" component={Page}></Route>                     
        </Switch>
      </Router>
        <Footer/>
    </div>
  );
}

export default Routes;
