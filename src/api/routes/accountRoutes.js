const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/customer/:customerId', accountController.getAccountsByCustomerId);
router.post('/', accountController.createAccount);

module.exports = router;
