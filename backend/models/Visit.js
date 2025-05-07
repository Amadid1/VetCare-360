const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  vetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veterinarian',
    required: true
  }
});

module.exports = mongoose.model('Visit', visitSchema);
