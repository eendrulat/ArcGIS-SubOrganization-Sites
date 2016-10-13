/* React Specific */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';

import App from './pages/app/App';
import List from './pages/list/List';
import './index.css';

ReactDOM.render((
  <DocumentTitle title="Oregon ArcGIS Online">
    <Router history={browserHistory}>
      <Route path='/' component={List} />
      <Route path='/:suborg' component={App} />
    </Router>
  </DocumentTitle>
), document.getElementById('root'));
