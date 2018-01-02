import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, Label} from 'recharts';
import { fetchMonthData } from '../reducers/dataReducer';
import TimeGraphList from './TimeGraphList';

class MonthGraph extends Component{


  componentDidMount(){
    this.props.getData()
  }

  render() {

    const data = this.props.data;

    console.log("data: ", data);

    return (
      <div>
        <h2 className="center-text-box">Mood vs. Day of the Month</h2>
        <div className="displaybox">
          <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} type="number" name="day"  domain={[0, 31]}/>
              <Label value="Day of the Month" offset={0} position="bottom" />
            <YAxis dataKey={'y'} type="number" name="mood" unit="" domain={[1, 5]} />
            <CartesianGrid />
            <Scatter name="Mood vs. Day of Month" data={data} fill="#8884d8" />
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
      dispatch(fetchMonthData());
    }
  }
}

const MonthGraphContainer = connect(mapStateToProps, mapDispatchToProps)(MonthGraph);

export default MonthGraphContainer;
