const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  },
  visits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Visit'
  }]
});

module.exports = mongoose.model('Pet', PetSchema);
