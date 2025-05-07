const express = require('express');
const router = express.Router();
const Veterinarian = require('../models/Veterinarian');

router.get('/', async (req, res) => {
  try {
    const vets = await Veterinarian.find();
    res.json(vets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
