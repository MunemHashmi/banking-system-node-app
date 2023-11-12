# Banking System API

## Overview

This Banking System API provides a suite of services to manage customers, bank accounts, and transactions in a banking environment. It follows RESTful principles, offering a predictable and intuitive interface for interacting with banking data.

## Getting Started

### Prerequisites

- Node.js
- MySQL
- NPM or Yarn package manager

### Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/MunemHashmi/banking-system-node-app.git
   ```
2. **Install Dependencies**:
   ```
   cd banking-system-node-app
   npm install
   ```
3. **Set Up the Environment**:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     DB_HOST=<your-database-host>
     DB_USER=<your-database-user>
     DB_PASS=<your-database-password>
     DB_NAME=<your-database-name>
     ```

### Starting the Application

Run the application using:

```
node index.js
```

The server should start and listen for requests on `http://localhost:3000`.

## Project Structure

The project is organized as follows:

```
banking-system-node-app/
│
├── src/
│   ├── api/
│   │   ├── controllers/    # API route handlers
│   │   ├── routes/         # API route definitions
│   │   └── middleware/     # Custom middleware, e.g., error handling
│   │
│   ├── config/             # Configuration files, e.g., database config
│   │
│   ├── models/             # Database models
│   │
│   ├── services/           # Business logic layer
│   │
│   └── utils/              # Utility functions and helpers
│
├── .env                    # Environment variables
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Project manifest
├── package-lock.json       # Locked versions of each package dependency
└── index.js                # Entry point of the application
```

Each directory has a specific purpose:
- `api`: Contains controllers, routes, and middleware.
- `config`: Includes configuration-related files.
- `models`: Defines the database schema and models.
- `services`: Contains business logic.
- `utils`: Houses utility functions and helpers.

## API Endpoints

### Customers

1. **Retrieve a Customer by ID**
   - **Endpoint**: `GET /customers/:id`
   - **Description**: Retrieves details of a specific customer.
   - **Parameters**:
     - `id`: Customer ID

2. **Create a New Customer**
   - **Endpoint**: `POST /customers`
   - **Payload**:
     ```json
     {
       "first_name": "string",
       "last_name": "string",
       "email": "string",
       "phone": "string",
       "address": "string"
     }
     ```

   - **Description**: Creates a new customer.

3. **Update Customer Details**
   - **Endpoint**: `PUT /customers/:id`
   - **Payload**:
     ```json
     {
       "first_name": "string",
       "last_name": "string",
       "email": "string",
       "phone": "string",
       "address": "string"
     }
     ```
   - **Description**: Updates details of a specific customer.
   - **Parameters**:
     - `id`: Customer ID

4. **Delete a Customer**
   - **Endpoint**: `DELETE /customers/:id`
   - **Description**: Deletes a specific customer.
   - **Parameters**:
     - `id`: Customer ID

### Accounts

1. **Retrieve all Accounts of a Customer**
   - **Endpoint**: `GET /accounts/customer/:customerId`
   - **Description**: Retrieves all accounts associated with a customer.
   - **Parameters**:
     - `customerId`: Customer's ID

2. **Create a New Account for a Customer**
   - **Endpoint**: `POST /accounts`
   - **Payload**:
     ```json
     {
       "customer_id": "number",
       "account_number": "string",
       "balance": "number",
       "type": "string"
     }
     ```
   - **Description**: Creates a new account for a specific customer.

### Transactions

1. **Retrieve Transactions for an Account**
   - **Endpoint**: `GET /transactions/account/:accountId`
   - **Description**: Retrieves transactions for a specific account.
   - **Parameters**:
     - `accountId`: Account ID

2. **Create a New Transaction for an Account**
   - **Endpoint**: `POST /transactions`
   - **Payload**:
     ```json
     {
       "account_id": "number",
       "amount": "number",
       "type": "string",
       "timestamp": "string"
     }
     ```
   - **Description**: Creates a new transaction.

## Database Schema

### Customer Table

| Field      | Type         | Description           |
|------------|--------------|-----------------------|
| customer_id | INT         | Primary key, Auto-increment |
| first_name  | VARCHAR(255) | Customer's first name |
| last_name   | VARCHAR(255) | Customer's last name  |
| email       | VARCHAR(255) | Customer's email      |
| phone       | VARCHAR(255) | Customer's phone      |
| address     | VARCHAR(255) | Customer's address    |

### Account Table

| Field         | Type         | Description               |
|---------------|--------------|---------------------------|
| account_id    | INT          | Primary key, Auto-increment |
| customer_id   | INT          | Foreign key to Customer   |
| account_number| VARCHAR(255) | Account number            |
| balance       | DECIMAL      | Account balance           |
| type          | VARCHAR(255)

 | Account type              |

### Transaction Table

| Field          | Type         | Description               |
|----------------|--------------|---------------------------|
| transaction_id | INT          | Primary key, Auto-increment |
| account_id     | INT          | Foreign key to Account    |
| amount         | DECIMAL      | Transaction amount        |
| type           | VARCHAR(255) | Transaction type          |
| timestamp      | DATETIME     | Timestamp of transaction  |

## Testing

- Use Postman or any other API testing tool to test the various endpoints.