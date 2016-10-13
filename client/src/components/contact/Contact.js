import React, { Component } from 'react';
import './Contact.css';

import Social from './social/Social';

class Contact extends Component {
  render() {
    return(
      <div className='contact-container'>
        <h2>Contact Us</h2>
        <span className='contact-logo'>
          <img src={this.props.config.logo} alt='logo'/>
        </span>
        <address>
          <ul className='contact-contact-list'>
            <li className='contact-agency'>{this.props.config.agency}</li>
            <li>{this.props.config.contact_street}</li>
            <li>{this.props.config.contact_citystatezip}</li>
            <li>
              <a href={'mailto:' + this.props.config.contact_email + '?subject=ArcGIS Online'}>
                {this.props.config.contact_email}
              </a>
            </li>
          </ul>
          <Social accounts={{
            'twitter': this.props.config.twitter,
            'facebook': this.props.config.facebook,
            'flickr': this.props.config.flickr,
            'youtube': this.props.config.youtube
          }}/>
        </address>
      </div>
    );
  }
}

export default Contact;
