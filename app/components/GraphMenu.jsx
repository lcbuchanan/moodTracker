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
              <Link to='/tempGraph'>
                <button>temperature</button>
              </Link>
              <Link to='/cloudGraph'>
                <button>cloud cover</button>
              </Link>
              <button>pressure</button>
            </div>
          </div>
        <div className="boxandtitle">
          <h4>location</h4>
          <div className="minidisplaybox">
            <button>place</button>
            <button>elevation</button>
            <button>distance to water</button>
          </div>
        </div>
        <div className="boxandtitle">
          <h4>time</h4>
          <div className="minidisplaybox">
            <button>day of the week</button>
            <button>day of the month</button>
            <button>general time graph</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
