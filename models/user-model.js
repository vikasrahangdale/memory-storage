// models/user.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/memory_storage');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  image: Buffer,
});

module.exports = mongoose.model('User', userSchema);
