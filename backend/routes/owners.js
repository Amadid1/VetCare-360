const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

// Obtenir tous les propriétaires
router.get('/', async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ajouter un propriétaire
router.post('/', async (req, res) => {
  const { firstName, lastName, address, city, phone } = req.body;

  const newOwner = new Owner({
    firstName,
    lastName,
    address,
    city,
    phone
  });

  try {
    const savedOwner = await newOwner.save();
    res.status(201).json(savedOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
