import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


export class EstimatedTotal extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}><h2>Est. Total</h2></Col>
        <Col md={6}><h2>{`$${this.props.price}`}</h2></Col>
      </Row>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default EstimatedTotal;
