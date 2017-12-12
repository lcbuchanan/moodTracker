'use-strict'

const Sequelize = require('sequelize');
const db = require('../index.js');


const WeatherEntry = db.define('weatherEntry', {
  temp: {
    type: Sequelize.DECIMAL(12, 1)
  },
  feelsLike: {
    type: Sequelize.DECIMAL(12, 1)
  },
  relativeHumidity: {
    type: Sequelize.DECIMAL(12, 1)
  },
  pressure: {
    type: Sequelize.DECIMAL(12, 1)
  },
  uvRating: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = WeatherEntry;
