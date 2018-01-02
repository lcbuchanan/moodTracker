import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default function GraphMenu () {

    return (
      <div className="boxandtitle">
        <h1>Graphs</h1>
        <div className="displaybox">
          <div className="boxandtitle">
            <h4>weather</h4>
            <div className="minidisplaybox">
              <Link to='/tempGraph' className="graphlink">
                <button type="button" className="btn btn-default">temperature</button>
              </Link>
              <Link to='/cloudGraph' className="graphlink">
                <button type="button" className="btn btn-default">cloud cover</button>
              </Link>
              <Link to='/pressureGraph' className="graphlink">
                <button type="button" className="btn btn-default">pressure</button>
              </Link>
            </div>
          </div>
        <div className="boxandtitle">
          <h4>location</h4>
          <div className="minidisplaybox">
            <button type="button" className="btn btn-default">place</button>
            <button type="button" className="btn btn-default">elevation</button>
            <button type="button" className="btn btn-default">distance to water</button>
          </div>
        </div>
        <div className="boxandtitle">
          <h4>time</h4>
          <div className="minidisplaybox">
            <Link to="/dayGraph" className="graphlink">
              <button type="button" className="btn btn-default">day of the week</button>
            </Link>
            <Link to="/monthGraph" className="graphlink">
              <button type="button" className="btn btn-default">day of the month</button>
            </Link>
            <Link to="/hourGraph" className="graphlink">
              <button type="button" className="btn btn-default">hour of the day</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    )
  }
