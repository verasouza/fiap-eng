const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  profile: { type: String, required: false },
  age: { type: Number, required: true },
  role: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);
