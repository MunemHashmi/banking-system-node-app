const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/account/:accountId', transactionController.getTransactionsByAccountId);
router.post('/', transactionController.createTransaction);

module.exports = router;
