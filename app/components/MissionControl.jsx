import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { setLoadingFalse } from '../reducers/loadingReducer';
import { fetchMoodAvg } from '../reducers/dataReducer';

class MissionControl extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getMoodAvg();
  }

  render(){
    const moodAvg = this.props.data;
    return (
      <div>
        <h1>Hello, Lori!</h1>
        <div className="missionControlContainer">
          <div className="infoBox">
            <div className="infoBoxTitle">
              <p>your average mood score to date:</p>
            </div>
            <h1>{moodAvg && (Math.round(moodAvg * 100)) / 100}</h1>
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
    loading: state.loading,
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    killLoading: () => {
      dispatch(setLoadingFalse())
    },
    getMoodAvg: () => {
      dispatch(fetchMoodAvg())
    }
  }
}

const MissionControlContainer = connect(mapStateToProps, mapDispatchToProps)(MissionControl)

export default MissionControlContainer;
