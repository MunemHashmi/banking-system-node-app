const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Account = sequelize.define('Account', {
    account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_id: DataTypes.INTEGER,
    account_number: DataTypes.STRING,
    balance: DataTypes.DECIMAL,
    type: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'accounts'
});

module.exports = Account;
