const mongoose = require('mongoose');

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true }
});

module.exports = mongoose.model('Vet', vetSchema);
