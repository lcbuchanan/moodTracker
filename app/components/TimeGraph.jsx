import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, Label} from 'recharts';
import { fetchTimeData } from '../reducers/dataReducer';

class TimeGraph extends Component{


  componentDidMount(){
    this.props.getData()
  }

  render() {

    const data = this.props.data;

    console.log("data: ", data);

    return (
      <div>
        <h2 className="center-text-box">Mood over Time</h2>
        <div className="displaybox">
          <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} type="number" name="days" unit="days" />
              <Label value="Time" offset={0} position="bottom" />
            <YAxis dataKey={'y'} type="number" name="mood" unit="" domain={[1, 5]} />
            <CartesianGrid />
            <Scatter name="A school" data={data} fill="#8884d8" />
            <Tooltip cursor={{strokeDasharray: '3 3'}} />
          </ScatterChart>

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
      dispatch(fetchTimeData());
    }
  }
}

const TimeGraphContainer = connect(mapStateToProps, mapDispatchToProps)(TimeGraph);

export default TimeGraphContainer;
