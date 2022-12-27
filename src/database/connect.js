const Sequelize = require('sequelize');
require('dotenv').config();

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  process.env.PG_DATABASE, 
  process.env.PG_USER, 
  process.env.PG_PASSWORD, 
  {
    host: process.env.PG_HOST,
    dialect:  'postgres'
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//sequelize.sync()
module.exports = sequelize;

