import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css'; // garde le CSS pour les cards, textes, etc.

const animals = [
  { name: "Bob", image: "/images/dog.jpg" },
  { name: "Luna", image: "/images/cat.jpg" },
  { name: "Fluffy", image: "/images/rabbit.jpg" },
  { name: "Kiwi", image: "/images/bird.jpg" },
  { name: "Sultan", image: "/images/horse.jpg" },
  { name: "Shelby", image: "/images/turtle.jpg" }
];

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/clinic-background.jpg')",
        backgroundSize: "cover",
        
      }}
    >
      <div className="container py-5">
        <div className="welcome-text text-center mb-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            Bienvenue chez VetCare 360
          </motion.h1>
        </div>

        <div className="row justify-content-center">
          {animals.map((animal, index) => (
            <motion.div
              key={index}
              className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card custom-card text-center">
                <img
                  src={animal.image}
                  className="card-img-top img-fluid rounded"
                  alt={animal.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{animal.name}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
