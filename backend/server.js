const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/owners', require('./routes/owners'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/vets', require('./routes/vets'));


app.use('/api/visits', require('./routes/vets'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/vetcare360', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connecté"))
.catch((err) => console.error("Erreur de connexion MongoDB:", err));

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
>>>>>>> 22b7c81815d6d2a92849546c703df8af407900c5
