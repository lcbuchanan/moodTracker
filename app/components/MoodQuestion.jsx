import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setLoadingTrue, setLoadingFalse } from '../reducers/loadingReducer';


const PromisedLocation = require('promised-location');

class MoodQuestion extends Component{

  constructor() {
    super();
    this.state = {
      moodScore: 0,
      fireRedirect: false
    }
    this.submitMood = this.submitMood.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(evt){
    console.log("you selected: ", evt.target.value)
    this.setState({
      moodScore: +evt.target.value
    })
  }

  submitMood(evt){
    evt.preventDefault();
    console.log("you clicked submit!", this.state.moodScore);
    console.log("startLoading type: ", setLoadingTrue);
    this.props.startLoading();
    //get latitude and longitude of location
    const options = {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 60000
    };

    const locator = new PromisedLocation(options);

    locator
      .then(position => {
        console.log("coordinates: ", position.coords);
        const lat = position.coords.latitude;
        const long = position.coords.latitude;
        return axios.post('/api/weather', {
          lat,
          long,
          moodScore: this.state.moodScore
        })
      })
      .then(res => {
        console.log("post succeeded!", res)
        this.props.killLoading();
        this.setState({
          fireRedirect: true
        })
      })
      .catch(err => console.error('Position Error: ', err.toString()))

  }

  render(){
    return (
      <div className="jumbotron" id="mood-question">
        {
          this.props.loading ?
          <div>
            <h3>one moment please...</h3>
            <div className="loader"></div>
          </div> :
          <div>
            <h1 className="display-3">How ya feelin?</h1>
            <p className="lead"> Rate your general mood:</p>
            <form onSubmit={this.submitMood} >
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"
                    name="moodScore" id="moodRadios1" value="1"
                    onChange={this.handleOptionChange}/>
                  1
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"
                    name="moodScore" id="moodRadios2" value="2"
                    onChange={this.handleOptionChange} />
                  2
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"
                    name="moodScore" id="moodRadios3" value="3"
                    onChange={this.handleOptionChange} />
                  3
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"
                    name="moodScore" id="moodRadios4" value="4"
                    onChange={this.handleOptionChange} />
                  4
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"
                    name="moodScore" id="moodRadios5" value="5"
                    onChange={this.handleOptionChange} />
                  5
                </label>
              </div>
              <div>
                <button type="submit" className="btn btn-default">submit</button>
              </div>
            </form>
          </div>
        }
        {
          this.state.fireRedirect && (
            <Redirect to={`/home`} />
          )
        }
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
    startLoading: () => {
      dispatch(setLoadingTrue())
    },
    killLoading: () => {
      dispatch(setLoadingFalse())
    }
  }
}

const MoodQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(MoodQuestion);

export default MoodQuestionContainer;
