'use-strict'

const Sequelize = require('sequelize');
const db = require('../index.js');


const MoodEntry = db.define('moodEntry', {
  moodScore: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 1
    }
  },
  day: {
    type: Sequelize.INTEGER
  }
})

module.exports = MoodEntry;
