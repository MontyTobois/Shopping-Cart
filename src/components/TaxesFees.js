import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


export class TaxesFees extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Est. taxes & fees (Based on 11223)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default TaxesFees;
