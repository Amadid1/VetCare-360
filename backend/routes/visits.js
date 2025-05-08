const express = require('express');
const router = express.Router();
const Visit = require('../models/Visit');

router.get('/pet/:petId', async (req, res) => {
  try {
    const visits = await Visit.find({ petId: req.params.petId });
    res.json(visits);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const visit = new Visit(req.body);
  try {
    const newVisit = await visit.save();
    res.status(201).json(newVisit);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
