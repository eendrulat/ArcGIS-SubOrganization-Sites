import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { Grid, Row, Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

import './List.css';

import $ from 'jquery';

import { serverConfig } from '../../config';

import AppNav from '../../components/appnav/AppNav';

// List of agencies
const AgencyList = ({agencies}) => {
  return(
    <ul className='list-agency-list'>
      {agencies.map((agency, i) => {
        return(
          <li key={i}>
            <a href={process.env.PUBLIC_URL + '/' + agency.abbr}>{agency.agency}</a>
          </li>
        );
      })}
    </ul>
  )
}

class List extends Component {
  state = {
    agencies: []
  };

  _getConfigs() {
    let query = {};
    query[serverConfig.queryParam] = 'all';

    $.ajax({
      dateType: 'json',
      url: serverConfig.baseUrl,
      data: query
    }).done((r) => {
      //only include agencies with appilcations setup
      let agencies = r.agencies.filter((agency) => {
        return agency.featured_apps_id;
      });
      this.setState({
        agencies: [...agencies]
      });
    });
  }

  _suborgList() {

  }

  componentDidMount() {
    this._getConfigs();
  }

  render() {
    return (
      <DocumentTitle title='Oregon Sub-Organization Page'>
        <div className='list-container'>
        <AppNav config={false}/>
          <Grid>
            <Row>
              <Col lg={12}>
                <Jumbotron>
                  <h1>Oops, something went wrong!</h1>
                  <p>Are you looking for one of Oregon&#39;s awesome ArcGIS Online agency pages?</p>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <h2>Participating Agencies</h2>
              </Col>
              <Col lg={12}>
                <AgencyList agencies={this.state.agencies}/>
              </Col>
            </Row>
          </Grid>
        </div>
      </DocumentTitle>
    );
  }
}

export default List;
