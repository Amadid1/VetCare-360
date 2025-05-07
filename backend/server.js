const express = require('express');
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