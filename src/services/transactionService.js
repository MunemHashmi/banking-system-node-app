const Transaction = require('../models/Transaction');

const getTransactionsByAccountId = async (accountId) => {
    return await Transaction.findAll({ where: { account_id: accountId } });
};

const createTransaction = async (transactionData) => {
    return await Transaction.create(transactionData);
};

const updateTransaction = async (transactionId, transactionData) => {
    const transaction = await Transaction.findByPk(transactionId);
    if (transaction) {
        return await transaction.update(transactionData);
    }
    return null;
};

const deleteTransaction = async (transactionId) => {
    return await Transaction.destroy({ where: { transaction_id: transactionId } });
};

module.exports = {
    getTransactionsByAccountId,
    createTransaction,
    updateTransaction,
    deleteTransaction
};
