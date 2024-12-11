require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { swaggerUi, swaggerSpec } = require('./swaggerConfig');
const connectToDatabase = require('./db/dbConfig');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

//config db
connectToDatabase();

// Middleware
app.use('/api/users', userRoutes);

// Documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
