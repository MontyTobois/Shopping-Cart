import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

let styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color:'red',
    fontWeight: 750
  }
}

export class PickupSavings extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>Pickup you order in store to cut cost and save you more money.</p>
      </Tooltip>
    )
    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={styles.totalSavings} md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default PickupSavings;
