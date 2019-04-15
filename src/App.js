import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './common/components/Navbar';
import Page404 from './common/errors/Page404';
import ProductViews from './components/ProductViews'; 
import Cart from './components/cart/Cart';
import Details from './components/Details';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar />
       <Switch>
        <Route exact path="/" component={ProductViews}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Page404}/>
       </Switch>
       {/* this modal component use in as root comp */}
       <Modal />
      </React.Fragment>
    );
  }
}

export default App;
