import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
// import Helmet from 'react-helmet';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Header from 'COMPONENTS/header';
import Footer from 'COMPONENTS/footer';

import HomePage from './HomePage';
import Application from './Applications';
import Team from './Team';
import Hall from './Hall';
import Media from './Media';
import Contacts from './Contacts';
import NotFound from './NotFound';

import '../styles/css/style.css';

// Force import during development to enable Hot-Module Replacement
if (process.env.NODE_ENV === 'development') {
  require('./HomePage'); // eslint-disable-line global-require
  require('./Team'); // eslint-disable-line global-require
  require('./Media'); // eslint-disable-line global-require
  require('./Contacts'); // eslint-disable-line global-require
  require('./NotFound'); // eslint-disable-line global-require
}

const supportsHistory = 'pushState' in window.history;

const App = props => (
  <Provider store={ props.store }>
    <BrowserRouter forceRefresh={ !supportsHistory } keyLength={ 12 }>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/application" component={ Application } />
          <Route exact path="/salles" component={ Hall } />
          <Route exact path="/valeurs" component={ Team } />
          { /* <Route exact path="/avis" component={ HomePage } /> */ }
          <Route exact path="/media" component={ Media } />
          <Route exact path="/contacts" component={ Contacts } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};
export default App;
