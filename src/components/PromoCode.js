import React, { Component } from 'react';
import { Row, Col, Media, Button, Collapse, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class PromoCode extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      open: false,
      value: ''
    }
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
          >
          { this.state.open === false ? `Apply` : `Hide` } Promo Code
          { this.state.open === false ? ` +`: ` -`}
        </Button>
      </div>
    );
  }
}

export default PromoCode;
