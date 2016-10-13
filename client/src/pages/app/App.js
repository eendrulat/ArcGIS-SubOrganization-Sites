import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';

import './App.css';

import $ from 'jquery';
import ReactGA from 'react-ga';

import { serverConfig, portalLinks, urlmap } from '../../config';

import AppNav from '../../components/appnav/AppNav';
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';

class App extends Component {
  state = {
    "id": undefined,
    "url": undefined,
    "abbr": undefined,
    "logo": undefined,
    "banner": undefined,
    "description": undefined,
    "subtitle": undefined,
    "contact_street": undefined,
    "contact_citystatezip": undefined,
    "contact_email": undefined,
    "twitter": undefined,
    "youtube": undefined,
    "facebook": undefined,
    "flickr": undefined,
    "disclaimer": undefined,
    "featured_apps_id": undefined,
    "open_data_id": undefined,
    "google_analytics": undefined,
    "agency": undefined,
    "gallery_items": []
  };

  _registerAnalytics(id) {
    ReactGA.initialize(id);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  _getConfig() {
    let query = {};
    let queryparam = urlmap.hasOwnProperty(this.props.params.suborg.toUpperCase()) ?
      urlmap[this.props.params.suborg.toUpperCase()] : this.props.params.suborg;
    query[serverConfig.queryParam] = queryparam;
    $.ajax({
      dateType: 'json',
      url: serverConfig.baseUrl,
      data: query
    }).done((r) => {
      if(!r.id) {
        browserHistory.push('/');
        return;
      }
      //html decode for removing any html entities
      //react will escape all strings already
      Object.keys(r).forEach(key => {
        r[key] = $("<div/>").html(r[key]).text();
      });


      if(r.google_analytics) {
        this._registerAnalytics(r.google_analytics);
      }

      this.setState({
        ...r
      });


      this._getGallery();
    });
  }

  _getGallery() {
    if(!this.state.featured_apps_id) {
      return;
    }
    let query = {};
    query.f = 'json';
    query.q = `group:${this.state.featured_apps_id}`;
    query.num = 100;
    $.ajax({
      url: `${portalLinks.rootUrl}/search/`,
      dataType: 'json',
      data: query
    }).done((r) => {
      this.setState({
        gallery_items: [...r.results]
      });
    });

  }

  componentDidMount() {
    this._getConfig();
  }

  render() {
    return (
      <DocumentTitle title={this.state.agency || 'ArcGIS Online SubOrg'}>
        <div className="App">
          <AppNav config={this.state}/>
          <Header config={this.state}/>
          <Intro  config={this.state}/>
          <Gallery config={this.state}/>
          <Footer config={this.state}/>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
