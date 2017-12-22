import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import MoodQuestion from './MoodQuestion';
import MissionControl from './MissionControl'


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
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
