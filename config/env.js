const env = {
    database: 'web',
    username: 'root',
    password: 'srikanth',
    host: '13.235.95.181',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;
  