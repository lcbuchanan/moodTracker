import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import { fetchCloudData } from '../reducers/dataReducer';

class Graph extends Component{

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
        <ScatterChart width={600} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        	<XAxis dataKey={'x'} type="number" name="cloud cover" unit="%"/>
        	<YAxis dataKey={'y'} type="number" name="mood" unit="" domain={[1, 5]}/>
        	<CartesianGrid />
          <Scatter name="A school" data={data} fill="#8884d8"/>
        	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
        </ScatterChart>
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
       dispatch(fetchCloudData());
     }
   }
 }

const GraphContainer = connect(mapStateToProps, mapDispatchToProps)(Graph);

export default GraphContainer;
