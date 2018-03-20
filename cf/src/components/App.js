import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';

import HeaderLinks from "./HeaderLinks";
import Home from "./body";
import Values from "./values";
import Media from "./media";
import Contacts from "./contacts";
import NotFound from "./NotFound";


export const App = () => (
  <Layout>
    <HeaderLinks/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/salles" component={Home}/>
      <Route exact path="/valeurs" component={Values}/>
      <Route exact path="/avis" component={Home}/>
      <Route exact path="/media" component={Media}/>
      <Route exact path="/contacts" component={Contacts}/>
      <Route path="*" component={NotFound} />
    </Switch>
</Layout>
);

export default App;
