const Customer = require('../models/Customer');

const getCustomerById = async (customerId) => {
    return await Customer.findByPk(customerId);
};

const createCustomer = async (customerData) => {
    return await Customer.create(customerData);
};

const updateCustomer = async (customerId, customerData) => {
    const customer = await Customer.findByPk(customerId);
    if (customer) {
        return await customer.update(customerData);
    }
    return null;
};

const deleteCustomer = async (customerId) => {
    return await Customer.destroy({ where: { customer_id: customerId } });
};

module.exports = {
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
