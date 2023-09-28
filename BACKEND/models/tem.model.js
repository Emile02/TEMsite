const mongoose = require('mongoose');

const TemSchema = new mongoose.Schema({
  email: String,
});

const Tem = mongoose.model('Tem', TemSchema);

module.exports = Tem;