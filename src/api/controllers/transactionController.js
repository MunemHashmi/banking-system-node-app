const transactionService = require('../../services/transactionService');
const accountService = require('../../services/accountService');

exports.getTransactionsByAccountId = async (req, res, next) => {
    try {
        const transactions = await transactionService.getTransactionsByAccountId(req.params.accountId);
        if (!transactions) {
            return res.status(404).send('No transactions found for this account');
        }
        res.json(transactions);
    } catch (error) {
        next(error);
    }
};

exports.createTransaction = async (req, res, next) => {
    try {
        const { account_id, amount, type, timestamp } = req.body;
        if (!account_id || amount === undefined || !type || !timestamp) {
            return res.status(400).send('Missing required fields');
        }

        const account = await accountService.getAccountById(account_id);
        if (!account) {
            return res.status(400).send('Invalid account ID');
        }

        const newTransactionId = await transactionService.createTransaction(req.body);
        res.status(201).json({ transactionId: newTransactionId });
    } catch (error) {
        next(error);
    }
};
