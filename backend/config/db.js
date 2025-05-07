const mongoose = require('mongoose');

const connectDB = async () => {
<<<<<<< HEAD
  try {
    await mongoose.connect('mongodb://localhost:27017/vetcare360', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
=======

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connecté !");

  } catch (err) {

    console.error("❌ Erreur MongoDB:", err.message);

    process.exit(1);

  }

};

module.exports = connectDB;
>>>>>>> 22b7c81815d6d2a92849546c703df8af407900c5
