const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('quotes', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('🚀 Database successfully connected');
} catch (error) {
  console.log(`💥 Error trying to connect to the database: ${error}`);
};

module.exports = sequelize;