const express = require('express');
const router = express.Router();
const Visit = require('../models/Visit');
const Pet = require('../models/Pet');

router.post('/', async (req, res) => {
  try {
    const { date, description, petId, vetId } = req.body;

    const newVisit = new Visit({
      date,
      description,
      petId,
      vetId
    });

    const savedVisit = await newVisit.save();

    // ➕ Ajouter la visite dans le tableau pet.visits[]
    await Pet.findByIdAndUpdate(petId, { $push: { visits: savedVisit._id } });

    res.status(201).json(savedVisit);
  } catch (err) {
    console.error('Erreur lors de l’ajout de la visite :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
