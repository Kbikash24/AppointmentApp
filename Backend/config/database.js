const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_management', 'root', 'Bikash@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
