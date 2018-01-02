import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, Label} from 'recharts';
import { fetchPressureData } from '../reducers/dataReducer';
import WeatherGraphList from './WeatherGraphList';

class PressureGraph extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getData();
  }

  render() {

  const data = this.props.data;
  console.log('data: ', data);

    return (
      <div>
        <h2 className="center-text-box">Mood vs. Temperature</h2>
        <div className="displaybox">
          <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <XAxis dataKey={'x'} type="number" name="pressure" unit="mbar" domain={[1000, 1050]}/>
              <Label value="Pressure mbar" offset={0} position="bottom" />
            <YAxis dataKey={'y'} type="number" name="mood" unit="" domain={[1, 5]}/>
            <CartesianGrid />
            <Scatter name="A school" data={data} fill="#84bcad"/>
            <Tooltip cursor={{strokeDasharray: '3 3'}}/>
          </ScatterChart>
          <WeatherGraphList />
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
       dispatch(fetchPressureData());
     }
   }
 }

const PressureGraphContainer = connect(mapStateToProps, mapDispatchToProps)(PressureGraph);

export default PressureGraphContainer;
