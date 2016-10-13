import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Gallery.css';
import $ from 'jquery';

import { itemTypes } from '../../config';

import Item from './item/Item';

class Gallery extends Component {
  _buildItemCards() {
    let acceptableTypes = this.props.config.gallery_items.filter((item) => {
      return $.inArray(item.type, itemTypes) !== -1;
    })
    return acceptableTypes.map((item, i) => {
      return <Col sm={12} md={4} lg={3} key={i}><Item details={item} /></Col>;
    });
  }

  render() {
    return(
      <Grid>
        <Row>
          <Col md={12}>
            <h1>Gallery</h1>
          </Col>
        </Row>
        <Row>
          {this._buildItemCards()}
        </Row>
      </Grid>
    );
  }
}

export default Gallery;
