import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { setLoadingFalse } from '../reducers/loadingReducer'

class MissionControl extends Component{

  constructor(){
    super();
  }


  render(){
    return (
      <div>
        <h1>Hello, Lori!</h1>
        <div className="missionControlContainer">
          <div className="infoBox">
            <div className="infoBoxTitle">
              <p>your average mood score to date:</p>
            </div>
            <h1>3.7</h1>
          </div>
          <div className="infoBox">
            <div className="infoBoxTitle">
              <p> I'll put something else here</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    killLoading: () => {
      dispatch(setLoadingFalse())
    }
  }
}

const MissionControlContainer = connect(mapStateToProps, mapDispatchToProps)(MissionControl)

export default MissionControlContainer;
