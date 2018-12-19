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
                <Media.Left
                />

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
