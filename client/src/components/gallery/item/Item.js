import React, { Component } from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import { portalLinks } from '../../../config';

import './Item.css';

class Item extends Component {

  _webApp() {
    return(
      <div className='item-web-application'>
        <p className='item-actions'>
          <Button bsStyle="primary" href={this.props.details.url} target='_blank'>View App</Button>&nbsp;
          <Button bsStyle="default" href={this._genererateDetailsUrl()} target='_blank'>Get Details</Button>
        </p>
        <h3 className='item-title'>{this.props.details.title}</h3>
        <p className='item-snippet'>{this.props.details.snippet}</p>
      </div>
    );
  }

  _genererateDetailsUrl() {
    return portalLinks.detailsUrl + "?id=" + this.props.details.id;
  }

  _generateThumbUrl() {
    if(this.props.details.thumbnail) {
      return portalLinks.rootUrl + '/content/items/' + this.props.details.id + '/info/' + this.props.details.thumbnail;
    } else {
      return "http://placehold.it/200x133?text=" + this.props.details.type;
    }
  }

  _renderThumb() {
    //TODO = create default item type
    //add additional types as needed
    //http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Items_and_item_types/02r3000000ms000000/
    switch(this.props.details.type) {
      case 'Web Mapping Application':
        return this._webApp();
      default:
        return this._webApp();
    }
  }

  render() {
    return(
      <Thumbnail className='item-thumbnail' src={this._generateThumbUrl()}>
        {this._renderThumb()}
      </Thumbnail>
    )
  }
}

export default Item;
