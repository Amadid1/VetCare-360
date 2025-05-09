require('dotenv').config(); // Très important : doit être au tout début !

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/owners', require('./routes/owners'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/vets', require('./routes/vets'));
app.use('/api/visits', require('./routes/visits'));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
app.use('/api/owners', (req, res, next) => {
    console.log("↪️ Requête reçue sur /api/owners");
    next();
  });
  app.use('/api/owners', require('./routes/owners'));
  
