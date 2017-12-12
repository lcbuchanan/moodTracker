'use strict';

const db = require('../index');
const MoodEntry = require('./moodEntries');
const WeatherEntry = require('./weatherEntries');


MoodEntry.belongsTo(WeatherEntry);
WeatherEntry.hasOne(MoodEntry);


module.exports = {
  db,
  MoodEntry,
  WeatherEntry
}
