import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';


export class Subtotal extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Subtotal;
