import React, { Component } from 'react';
import { Row, Col, Media, Button, Collapse, Well } from 'react-bootstrap';


export class ItemDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
          >
          { this.state.open === false ? `See` : `Hide` } item details
          { this.state.open === false ? ` +`: ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    src="https://i5.walmartimages.com/asr/62889fc7-733e-4c69-9ccb-b3fb7523bc6e_1.1c5cf6b4ebfdb3813170800aa49ffa31.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
                    alt="thumbnail"
                    width={100}
                    height={100}
                  />
                </Media.Left>
                <Media.Body>
                  <p>Take flight with Dji Spark Drone Alpine White With Remote Control Combo </p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br/>
                      <strong className="price-strike">{`$${this.props.price}`}</strong>

                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

// ComponentName.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default ItemDetails;
