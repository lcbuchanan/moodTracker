'use strict'
const router = require('express').Router()
const db = require('../db')
const { WeatherEntry, MoodEntry } = require('../db/models');
const axios = require('axios');


// get all mood entries including weather data
router.get('/weather/', (req, res, next) => {
  return MoodEntry.findAll({include: [{model: WeatherEntry}]})
  .then(moodEntries => res.json(moodEntries))
  .catch(next)
})

// get all mood entries with temperature
router.get('/mood/temp', (req, res, next) => {
  return WeatherEntry.findAll({
  attributes: ['id', 'temp'], // like saying: SELECT id, name, age from pugs;
  include: [{
    model: MoodEntry,
    attributes: ['moodScore']
    }]
  })
  .then(entries => res.json(entries))
  .catch(next)
})

//get all mood entries with cloud cover info
router.get('/mood/clouds', (req, res, next) => {
  return WeatherEntry.findAll({
  attributes: ['id', 'cloudCover'], // like saying: SELECT id, name, age from pugs;
  include: [{
    model: MoodEntry,
    attributes: ['moodScore']
    }]
  })
  .then(entries => res.json(entries))
  .catch(next)
})

//get all mood entries with pressure info
router.get('/mood/pressure', (req, res, next) => {
  return WeatherEntry.findAll({
    attributes: ['id', 'pressure'],
    include: [{
      model: MoodEntry,
      attributes: ['moodScore']
    }]
  })
  .then(entries => res.json(entries))
  .catch(next)
})

//get average mood score
router.get('/mood/avg', (req, res, next) => {
  return MoodEntry.findAll({
    attributes: ['moodScore']
  })
  .then(scoreObjectArray => {
    const scoreArray = scoreObjectArray.map((scoreObj) => scoreObj.moodScore);
    const avg = scoreArray.reduce((sum, currentVal) => sum + currentVal ) / (scoreArray.length);
    res.json(avg);
  })
  .catch(next);
})

router.get('/mood/time', (req, res, next) => {
  return MoodEntry.findAll({
    attributes: ['moodScore', 'createdAt']
  })
  .then(response => {
    res.json(response);
  })
  .catch(next);
})

// creates a new mood entry and a new weather entry
// returns the new mood entry, icluding weather entry id
router.post('/weather/', (req, res, next) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.long}&appid=0498f49666ca0d738dbb8df32c79476f`)
  .then(weather => {
    const tempKelvin = weather.data.main.temp;
    const weatherInput = {
      humidity: weather.data.main.humidity,
      pressure: weather.data.main.pressure,
      cloudCover: weather.data.clouds.all,
      temp: (9 / 5) * (tempKelvin - 273) + 32
    };
    return WeatherEntry.create(weatherInput)
    .then(newWeatherEntry => {
      return MoodEntry.create({
        moodScore: req.body.moodScore
      }).then(newMoodEntry => {
        return newMoodEntry.setWeatherEntry(newWeatherEntry)
      });
    })
  })
  .then(newMoodEntry => res.status(201).json(newMoodEntry))
  .catch(next);
});


module.exports = router;
