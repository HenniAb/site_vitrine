import React, { PureComponent } from "react";

import HeaderLinks from "component/HeaderLinks";
import Mybody from "component/body";
import MyMedia from "component/media";
import myValues from "component/values";
import myTest from "component/myTest";
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
                <Route exact path="/" component={Mybody}/>
                <Route exact path="/salles" component={Mybody}/>
                <Route exact path="/valeurs" component={myValues}/>
                <Route exact path="/avis" component={Mybody}/>
                <Route exact path="/media" component={MyMedia}/>
                <Route exact path="/contacts" component={myTest}/>
                /*<Route exact path="/add" component={AddCounterComponent}/>
                <Route exact path="/counter" component={CounterComponent}/>*/
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    )
  }
}
