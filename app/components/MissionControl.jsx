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
    let iconSource;
    this.props.moodScore > moodAvg ? iconSource = '.../public/images/up_arrow.svg.png' : iconSource = '.../public/images/down_arrow/svg.png';

    return (
      <div>
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
              <img src={iconSource} />
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
