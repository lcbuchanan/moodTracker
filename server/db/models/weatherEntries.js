'use-strict'

const Sequelize = require('sequelize');
const db = require('../index.js');


const WeatherEntry = db.define('weatherEntry', {
  temp: {
    type: Sequelize.DECIMAL(12, 1)
  },
  humidity: {
    type: Sequelize.DECIMAL(12, 1)
  },
  pressure: {
    type: Sequelize.DECIMAL(12, 1)
  },
  cloudCover: {
    type: Sequelize.INTEGER
  }
})

module.exports = WeatherEntry;
