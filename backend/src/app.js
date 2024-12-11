require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { swaggerUi, swaggerSpec } = require('./swaggerConfig');
const connectToDatabase = require('./db/dbConfig');

const app = express();
app.use(express.json());

const dbUrl = process.env.MONGODB_URI + process.env.MONGODB_DATABASE;
const dbUser = process.env.MONGODB_USERNAME;
const dbPWD = process.env.MONGODB_PWD;


//config db
connectToDatabase();

// Middleware
app.use('/api/users', userRoutes);

// Documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
