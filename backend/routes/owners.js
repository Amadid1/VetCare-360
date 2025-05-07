const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

// Ajouter ces lignes !
const Visit = require('../models/Visit');
const Veterinarian = require('../models/Veterinarian');

router.get('/search', async (req, res) => {
  const { lastName } = req.query;

  try {
    const owner = await Owner.findOne({ lastName })
      .populate({
        path: 'pets',
        populate: {
          path: 'visits',
          populate: {
            path: 'vetId',
            model: 'Veterinarian'
          }
        }
      });

    if (!owner) {
      return res.status(404).json({ message: 'Owner not found' });
    }

    res.json(owner);
  } catch (err) {
    console.error('Erreur lors de la recherche du propriétaire :', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
