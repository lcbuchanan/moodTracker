import React, { Component } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import MoodQuestion from './MoodQuestion';


export default class Root extends Component{

  render(){
    return(
      <div className="component-wrapper">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <h2>MoodTracker</h2>
          <p>Graphs</p>
        </div>
        <div id="question-box">
          <MoodQuestion />
        </div>
      </div>
    )
  }
}
