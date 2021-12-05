const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'us-cdbr-iron-east-02.cleardb.net',
    dialect: 'mysql',
    port: 3306
})

module.exports = sequelize;