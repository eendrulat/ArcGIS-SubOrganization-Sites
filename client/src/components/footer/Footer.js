import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
  _getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col md={12}>
            <p className='footer-text'>&copy; {this._getCurrentYear()} {this.props.config.agency}</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Footer;
