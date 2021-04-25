import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import App from "../components/App/App";
import Header from '../components/layout/header';
import Jobs from './jobs/jobs';
import JobInfo from "../pages/JobInfo/jobInfo";

class Main extends Component {
  render() {
    return (
      <>
      <Header />
        <Switch>
          <Route exact path="/job" component={Jobs} />
          {/* <Route exact path="/" component={Jobs} /> */}
          <Route  path="/job/:id" component={JobInfo} />
          <Redirect from="*" to="/job" />
        </Switch>
        </>
    );
  }
}

export default Main;
