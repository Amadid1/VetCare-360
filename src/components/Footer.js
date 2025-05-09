import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1"><strong>Adresse :</strong> 123 Avenue Mohammed V, Casablanca</p>
        <p className="mb-1"><strong>Téléphone :</strong> +212 5 22 33 44 55</p>
        <p className="mb-3"><strong>Email :</strong> contact@vetcare360.ma</p>
        <hr style={{ backgroundColor: "white" }} />
        <p className="mb-0">&copy; 2025 VetCare 360 | Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
