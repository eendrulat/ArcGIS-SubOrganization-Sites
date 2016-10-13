import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header
              style={{
                background: `url('${this.props.config.banner}') center center / cover no-repeat scroll`
              }}>
        <Grid>
          <Row>
            <Col xsHidden md={0} lg={12} className='header-container'>
              <h1 className='header-title'>{this.props.config.agency}</h1>
              <h2><i className='header-subtitle'>{this.props.config.subtitle}</i></h2>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
