const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Customer = sequelize.define('Customer', {
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'customers'
});

module.exports = Customer;
