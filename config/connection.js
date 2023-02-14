const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "heroku_6ee795b7b3f8f84",
  "b4d3060a6be01c",
  "8a36b9f2",
  // process.env.DB_NAME,
  // process.env.DB_USER,
  // process.env.DB_PASSWORD,
  {
    host: "us-cdbr-east-06.cleardb.net",
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
