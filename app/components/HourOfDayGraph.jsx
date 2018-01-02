import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, Label} from 'recharts';
import { fetchHourData } from '../reducers/dataReducer';
import TimeGraphList from './TimeGraphList';

class HourGraph extends Component{


  componentDidMount(){
    this.props.getData()
  }

  render() {

    const data = this.props.data;

    console.log("data: ", data);

    return (
      <div>
        <h2 className="center-text-box">Mood vs. Hour of the Day</h2>
        <div className="displaybox">
          <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} type="number" name="hours"  unit="hours" domain={[0, 24]}/>
              <Label value="Day of the Month" offset={0} position="bottom" />
            <YAxis dataKey={'y'} type="number" name="mood" unit="" domain={[1, 5]} />
            <CartesianGrid />
            <Scatter name="Mood vs. Hour" data={data} fill="#8884d8" />
            <Tooltip cursor={{strokeDasharray: '3 3'}} />
          </ScatterChart>
          <TimeGraphList />
        </div>
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(fetchHourData());
    }
  }
}

const HourGraphContainer = connect(mapStateToProps, mapDispatchToProps)(HourGraph);

export default HourGraphContainer;
