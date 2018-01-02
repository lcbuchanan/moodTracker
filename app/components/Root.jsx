import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import MoodQuestion from './MoodQuestion';
import MissionControl from './MissionControl';
import TempGraph from './TempGraph';
import MoodCloudGraph from './MoodCloudsGraph';
import GraphMenu from './GraphMenu';
import MoodPressureGraph from './MoodPressure';
import HourGraph from './HourOfDayGraph';
import MonthGraph from './MonthGraph';
import DayGraph from './DayOfWeekGraph'


export default class Root extends Component{

  render(){
    return(
      <div>
        <div className="component-wrapper">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div id="logo">
              <p>MoodTracker</p>
            </div>
            <div className="navbuttons">
              <NavLink to="/graphs">
                Graphs
              </NavLink>
              <NavLink to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div id="question-box">
            <Switch>
              <Route exact path="/home" component={MissionControl} />
              <Route exact path="/" component={MoodQuestion} />
              <Route exact path="/graphs" component={GraphMenu} />
              <Route exact path="/tempGraph" component={TempGraph} />
              <Route exact path="/cloudGraph" component={MoodCloudGraph} />
              <Route exact path="/pressureGraph" component={MoodPressureGraph} />
              <Route exact path="/monthGraph" component={MonthGraph} />
              <Route exact path="/hourGraph" component={HourGraph} />
              <Route exact path="/dayGraph" component={DayGraph} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
