'use strict'
const router = require('express').Router()
const db = require('../db')
const { WeatherEntry, MoodEntry } = require('../db/models');


// get all mood entries including weather data
router.get('/weather/', (req, res, next) => {
  return MoodEntry.findAll({include: [{model: WeatherEntry}]})
  .then(moodEntries => res.json(moodEntries))
  .catch(next)
})

// creates a new mood entry and a new weather entry
// returns the new mood entry, icluding weather entry id
router.post('/weather/', (req, res, next) => {
  WeatherEntry.create(req.body)
  .then(newWeatherEntry => {
    return MoodEntry.create({
      moodScore: req.body.moodScore
    }).then(newMoodEntry => {
      return newMoodEntry.setWeatherEntry(newWeatherEntry)
    });
  })
  .then(newMoodEntry => res.status(201).json(newMoodEntry))
  .catch(next);
});


module.exports = router;
