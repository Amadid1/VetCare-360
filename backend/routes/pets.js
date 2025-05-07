const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const Owner = require('../models/Owner');

// POST add pet to owner
router.post('/', async (req, res) => {
  const { ownerId, name, birthDate, type } = req.body;
  try {
    const newPet = new Pet({ owner: ownerId, name, birthDate, type });
    await newPet.save();

    await Owner.findByIdAndUpdate(ownerId, { $push: { pets: newPet._id } });

    res.json(newPet);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// PUT update pet
router.put('/:id', async (req, res) => {
  const { name, birthDate, type } = req.body;
  try {
    const pet = await Pet.findByIdAndUpdate(
      req.params.id,
      { name, birthDate, type },
      { new: true }
    );
    res.json(pet);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
