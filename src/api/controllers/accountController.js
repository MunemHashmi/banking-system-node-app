const accountService = require('../../services/accountService');
const customerService = require('../../services/customerService');

exports.getAccountsByCustomerId = async (req, res, next) => {
    try {
        const accounts = await accountService.getAccountsByCustomerId(req.params.customerId);
        if (!accounts) {
            return res.status(404).send('No accounts found for this customer');
        }
        res.json(accounts);
    } catch (error) {
        next(error);
    }
};

exports.createAccount = async (req, res, next) => {
    try {
        const { customer_id, account_number, balance, type } = req.body;
        if (!customer_id || !account_number || balance === undefined || !type) {
            return res.status(400).send('Missing required fields');
        }

        const customer = await customerService.getCustomerById(customer_id);
        if (!customer) {
            return res.status(400).send('Invalid customer ID');
        }

        const newAccountId = await accountService.createAccount(req.body);
        res.status(201).json({ accountId: newAccountId });
    } catch (error) {
        next(error);
    }
};
