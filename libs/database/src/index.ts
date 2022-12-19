const Sequelize = require("sequelize");
const dbConfig = require("./config");

const connection = new Sequelize(dbConfig);

module.exports = connection;
