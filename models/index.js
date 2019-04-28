const Sequelize = require("sequelize");
const sequelize = new Sequelize(); // pass your sequelize config here

const FirstModel = require("./first-model");
const SecondModel = require("./second-model");
const ThirdModel = require("./third-model");

const models = {
  First: FirstModel.init(sequelize, Sequelize),
  Second: SecondModel.init(sequelize, Sequelize),
  Third: ThirdModel.init(sequelize, Sequelize)
};

// Run `.associate` if it exists,
// ie create relationships in the ORM

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

const db = { ...models, sequelize };

module.exports = db;
