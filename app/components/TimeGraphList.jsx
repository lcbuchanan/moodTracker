import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default function TimeGraphList () {

  return (
    <div>
      <h4>all time graphs:</h4>
        <div className="minidisplaybox">
          <NavLink to='/tempGraph' className="graphlink">
            day of the week
          </NavLink>
          <NavLink to='/monthGraph' className="graphlink">
            day of the month
          </NavLink>
          <NavLink to='/hourGraph' className="graphlink">
            hour of the day
          </NavLink>
        </div>
    </div>
  )

}
