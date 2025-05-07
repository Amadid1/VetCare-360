const express = require('express');
const router = express.Router();
const Proprietaire = require('../models/Proprietaire');

router.get('/', async (req, res) => {
  const result = await Proprietaire.find();
  res.json(result);
});

router.post('/', async (req, res) => {
  const proprietaire = new Proprietaire(req.body);
  await proprietaire.save();
  res.json(proprietaire);
});

module.exports = router;