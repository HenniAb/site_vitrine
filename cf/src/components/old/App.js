import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFoundPage } from './NotFoundPage';
import { Home } from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

import HeaderLinks from "HeaderLinks";
import myBody from "body";
import myMedia from "media";
import myValues from "values";
import myContacts from "contacts";
import {Route, Switch} from "react-router-dom";
import HoverComponent from "hoverComponent/HoverComponent";
import AddCounterComponent from "addCounterComponent/AddCounterComponent";
import NotFound from "NotFound";
import CounterComponent from "counterComponent/CounterComponent";


/*const CONDITION = true;

const AutoRedirect = (Logged, NotLogged) => (
  CONDITION ? (
    Logged
  ) : (
    NotLogged
  )
);

const HomeRedir = () => (
  <Redirect to="/" />
);

const DashRedir = () => (
  <Redirect to="/dashboard" />
);*/

export const App = () => (
  <Layout>
    <HeaderLinks match={this.props.match}/>
    <Switch>
      /*<Route
        exact
        path="/"
        component={AutoRedirect(DashRedir, Home)}
      />
      <Route
        exact
        path="/dashboard"
        component={AutoRedirect(Dashboard, HomeRedir)}
      />
      <Route component={NotFoundPage} />*/

      <Route exact path="/" component={myBody}/>
      <Route exact path="/salles" component={myBody}/>
      <Route exact path="/valeurs" component={myValues}/>
      <Route exact path="/avis" component={myBody}/>
      <Route exact path="/media" component={myMedia}/>
      <Route exact path="/contacts" component={myContacts}/>
      /*<Route exact path="/add" component={AddCounterComponent}/>
      <Route exact path="/counter" component={CounterComponent}/>*/
      <Route path="*" component={NotFound} />
    </Switch>



  </Layout>
);


export default App;
