import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    let message;
    this.props.moodScore > moodAvg ? message = 'your most recent mood entry is higher than your average!' : message = 'your most recent mood entry is lower than average for you';

    return (
      <div className="center-text-box">
        <h1>Hello, Lori!</h1>
        <div className="missionControlContainer">
          <div className="infoBox">
            <div className="infoBoxTitle">
              <p>your average mood score:</p>
            </div>
            <h1>{!isNaN(moodAvg) && (Math.round(moodAvg * 10)) / 10}</h1>
          </div>
          <div className="infoBox">
            <div className="infoBoxTitle">
              <p> most recent entry vs average:</p>
            </div>
            <p>{message}</p>
          </div>
        </div>
        <Link to="/">
          <button type="button" className="btn btn-default">enter a new mood score</button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    data: state.data,
    moodScore: state.moodScore
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
