const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  telephone: String,
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

module.exports = mongoose.model('Owner', OwnerSchema);
