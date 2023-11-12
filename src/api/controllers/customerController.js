const customerService = require('../../services/customerService');

exports.getCustomerById = async (req, res, next) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        if (!customer) {
            return res.status(404).send('Customer not found');
        }
        res.json(customer);
    } catch (error) {
        next(error);
    }
};

exports.createCustomer = async (req, res, next) => {
    try {
        const { first_name, last_name, email, phone, address } = req.body;
        if (!first_name || !last_name || !email || !phone || !address) {
            return res.status(400).send('Missing required fields');
        }

        const newCustomerId = await customerService.createCustomer(req.body);
        res.status(201).json({ customerId: newCustomerId });
    } catch (error) {
        next(error);
    }
};

exports.updateCustomer = async (req, res, next) => {
    try {
        const customer = await customerService.getCustomerById(req.params.id);
        if (!customer) {
            return res.status(404).send('Customer not found');
        }

        const updatedRows = await customerService.updateCustomer(req.params.id, req.body);
        if (updatedRows === 0) {
            return res.status(404).send('No updates made to the customer');
        }
        res.status(200).send('Customer updated successfully');
    } catch (error) {
        next(error);
    }
};

exports.deleteCustomer = async (req, res, next) => {
    try {
        const deletedRows = await customerService.deleteCustomer(req.params.id);
        if (deletedRows === 0) {
            return res.status(404).send('Customer not found');
        }
        res.status(200).send('Customer deleted successfully');
    } catch (error) {
        next(error);
    }
};
