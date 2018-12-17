import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import Subtotal from './components/Subtotal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state ={
        total: 1000
      };
  }

  render() {
    return (<div className="container">
      <Grid className="purchase-card">
        <h1>Hello world</h1>
        <Subtotal price={this.state.total.toFixed(2)} />

      </Grid>
    </div>);
  }
}

export default App;
