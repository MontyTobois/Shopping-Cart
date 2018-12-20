import React, { Component } from 'react';
import { Row, Col, Media, Button, Collapse, Well, FormGroup, ControlLabel, FormControl, Form } from 'react-bootstrap';


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
        <Collapse in={this.state.open}>
        <div>
          <Well>
            <Row classname="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInlineName">
                    <ControlLabel>Promo Code</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter promo code"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                    >
                      Apply Discount
                  </Button>
                </Form>
              </Col>
            </Row>
          </Well>
        </div>
        </Collapse>
      </div>
    );
  }
}

export default PromoCode;
