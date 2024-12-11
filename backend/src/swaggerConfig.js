const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuração básica do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Microserviço de Usuários',
      version: '1.0.0',
      description: 'API para gerenciar usuários',
    },
    servers: [
      {
        url: 'http://localhost:8089/api',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Localização das definições de endpoints
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
