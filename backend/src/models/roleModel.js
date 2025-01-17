const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  users: { type: Array, required: false },
  permissions: { type: Array, required: false },
});

module.exports = mongoose.model('Role', roleSchema);
