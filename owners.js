const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', async (req, res) => {
  const { lastName } = req.query;
  try {
    const owners = lastName
      ? await Owner.find({ lastName: { $regex: lastName, $options: 'i' } })
      : await Owner.find();
    res.json(owners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const owner = new Owner(req.body);
  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOwner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
