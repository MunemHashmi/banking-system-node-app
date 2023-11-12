const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Transaction = sequelize.define('Transaction', {
    transaction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    account_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    timestamp: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'transactions'
});

module.exports = Transaction;
