import React, { Component } from "react"
import { Route } from "react-router-dom"

import SampleApp from "component/SampleApp"

export default class Application extends Component {
  render() {
    return <Route
      path="/:filter?"
      component={SampleApp} />
  }
}
