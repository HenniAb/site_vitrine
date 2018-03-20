import React, { PureComponent } from "react";

import HeaderLinks from "component/HeaderLinks";
import myBody from "component/body";
import myMedia from "component/media";
import myValues from "component/values";
import myContacts from "component/contacts";
import {Route, Switch} from "react-router-dom";
import HoverComponent from "component/hoverComponent/HoverComponent";
import AddCounterComponent from "component/addCounterComponent/AddCounterComponent";
import NotFound from "component/NotFound";
import CounterComponent from "component/counterComponent/CounterComponent";

export default class SampleApp extends PureComponent {
  render() {
    return (
        <div style={{position: "relative"}}>
            <div>
                <HeaderLinks match={this.props.match}/>
            </div>
            <Switch>
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
        </div>
    )
  }
}