import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { links, portalLinks } from '../../config';

import './AppNav.css';

class AppNav extends Component {

   links = links.map((v, i) => {
    return(
      <NavItem key={i} href={v.link}>{v.title}</NavItem>
    );
  });

  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={this.props.config.abbr ? '#' : portalLinks.portalUrl}>{this.props.config.abbr || 'Oregon'} ArcGIS Online</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.links}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href={portalLinks.loginUrl}><Glyphicon glyph="log-in" /> Sign In</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}

export default AppNav;
