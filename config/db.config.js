const env = require('./env.js');
//const Op = Sequelize.Op;
const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

 

db.perosns = require('../model/Persons.js')(sequelize, Sequelize);

db.sequelize;
db.Op=Sequelize.Op;
const authenticateDB = async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticateDB()
module.exports = db;