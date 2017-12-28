import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import MoodQuestion from './MoodQuestion';
import MissionControl from './MissionControl';
import Graph from './Graph';
import MoodCloudGraph from './MoodCloudsGraph';


export default class Root extends Component{

  render(){
    return(
      <div>
        <div className="component-wrapper">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <h2>MoodTracker</h2>
            <p>Graphs</p>
          </div>
          <div id="question-box">
            <Switch>
              <Route exact path="/home" component={MissionControl} />
              <Route exact path="/" component={MoodQuestion} />
              <Route exact path="/graph" component={Graph} />
              <Route exact path="/cloudGraph" component={MoodCloudGraph} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
