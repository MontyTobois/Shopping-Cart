import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state ={
        total: 359,
        pickupSavings: -3.85,
        taxes: 0,
        estimatedTotal: 0
      };
  }

  render() {
    return (<div className="container">
      <Grid className="purchase-card">
        <h1>Shopping Cart</h1>
        <Subtotal price={this.state.total.toFixed(2)} />
        <PickupSavings price={this.state.pickupSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)} />
        <hr/>
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
        <hr/>
        <PromoCode />
      </Grid>
    </div>);
  }
}

export default App;
