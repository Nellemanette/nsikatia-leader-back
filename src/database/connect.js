const Sequelize = require('sequelize');
require('dotenv').config();
let config = require('./datasource'); 


const db = [];
const datasources = config; 

for(const element of datasources) {
    db.push(new Sequelize( 
      process.env.PG_DATABASE, 
      element.user, 
      element.password, 
      {
        host: process.env.PG_HOST,
        dialect:  'postgres'
      }       
    ));
}

for(const element of db) {
    element
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully for ' + element.config.username);
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
}

module.exports = db;

