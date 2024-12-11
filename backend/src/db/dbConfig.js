const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = async () => {
    const url = `${process.env.MONGODB_URI}/${process.env.MONGODB_DATABASE}?authSource=admin`;
  
    try {
      await mongoose.connect(process.env.MONGODB_URL); 
      console.log('Conectado ao MongoDB com sucesso!');
    } catch (err) {
      console.error('Erro ao conectar ao MongoDB:', err);
      process.exit(1);
    }
  
    const db = mongoose.connection;
  
    db.on('error', console.error.bind(console, 'Erro de conexão:'));
    db.once('open', () => {
      console.log('Conexão aberta com o MongoDB.');
    });
  };

module.exports = connectToDatabase;
