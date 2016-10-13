import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Intro.css';

import Contact from '../contact/Contact';

class Intro extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={12} md={8} lg={8} className='intro-description-container'>
            <h2>About <a href={this.props.config.url} target='_blank'>{this.props.config.agency}</a></h2>
            <p className='intro-description'>{this.props.config.description}</p>
            <p className='intro-disclaimer'>
              <b>Disclaimer</b> - <i>{this.props.config.disclaimer}</i>
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Contact config={this.props.config} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Intro;
