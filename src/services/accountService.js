const Account = require('../models/Account');

const getAccountsByCustomerId = async (customerId) => {
    return await Account.findAll({ where: { customer_id: customerId } });
};

const createAccount = async (accountData) => {
    return await Account.create(accountData);
};

const updateAccount = async (accountId, accountData) => {
    const account = await Account.findByPk(accountId);
    if (account) {
        return await account.update(accountData);
    }
    return null;
};

const deleteAccount = async (accountId) => {
    return await Account.destroy({ where: { account_id: accountId } });
};

module.exports = {
    getAccountsByCustomerId,
    createAccount,
    updateAccount,
    deleteAccount
};
