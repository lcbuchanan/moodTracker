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

// creates a new mood entry and a new weather entry
// returns the new mood entry, icluding weather entry id
router.post('/weather/', (req, res, next) => {
  console.log("from post route: ", req.body)

  return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.long}&appid=0498f49666ca0d738dbb8df32c79476f`)
  .then(weather => {
    //console.log('response: ', weather)
    const tempKelvin = weather.data.main.temp;
    const weatherInput = {
      humidity: weather.data.main.humidity,
      pressure: weather.data.main.pressure,
      cloudCover: weather.data.clouds.all,
      temp: (9 / 5) * (tempKelvin - 273) + 32
    }
    console.log('data going in: ', weatherInput);
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

  // WeatherEntry.create(req.body)
  // .then(newWeatherEntry => {
  //   return MoodEntry.create({
  //     moodScore: req.body.moodScore
  //   }).then(newMoodEntry => {
  //     return newMoodEntry.setWeatherEntry(newWeatherEntry)
  //   });
  // })
  // .then(newMoodEntry => res.status(201).json(newMoodEntry))
  //.catch(next);
});


module.exports = router;
