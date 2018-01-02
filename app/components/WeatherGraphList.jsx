import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default function WeatherGraphList () {

  return (
    <div>
      <h4>all weather graphs:</h4>
        <div className="minidisplaybox">
          <NavLink to='/tempGraph' className="graphlink">
            temperature
          </NavLink>
          <NavLink to='/cloudGraph' className="graphlink">
            cloud cover
          </NavLink>
          <NavLink to='/pressureGraph' className="graphlink">
            pressure
          </NavLink>
        </div>
    </div>
  )

}
