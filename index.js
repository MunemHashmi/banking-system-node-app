const express = require('express');
const customerRoutes = require('./src/api/routes/customerRoutes');
const accountRoutes = require('./src/api/routes/accountRoutes');
const transactionRoutes = require('./src/api/routes/transactionRoutes');
const errorHandler = require('./src/api/middleware/errorHandler');
const sequelize = require('./src/config/sequelizeConfig');
const logger = require('./src/utils/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});

app.use('/customers', customerRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);

app.use((error, req, res, next) => {
    logger.error(`Error: ${error.message}`);
    res.status(500).send('Internal Server Error');
});

app.use((req, res) => {
    logger.warn(`Unhandled request: ${req.method} ${req.originalUrl}`);
    res.status(404).send('Not Found');
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        logger.info(`Server running on http://localhost:${port}`);
    });
}).catch((err) => {
    logger.error(`Failed to sync database: ${err.message}`);
});

module.exports = app;
