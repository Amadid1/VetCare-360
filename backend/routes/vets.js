const express = require('express');
const router = express.Router();
const Vet = require('../models/Vet');

router.get('/', async (req, res) => {
  try {
    const vets = await Vet.find();
    res.json(vets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const vet = new Vet(req.body);
  try {
    const newVet = await vet.save();
    res.status(201).json(newVet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
