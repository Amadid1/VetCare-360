import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddOwner = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    telephone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/owners', form);
      navigate('/find-owners');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout du propriétaire.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Ajouter un Propriétaire</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow" data-aos="fade-up">
        <div className="mb-3"><label>Prénom</label>
          <input type="text" className="form-control" name="firstName" required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Nom</label>
          <input type="text" className="form-control" name="lastName" required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Adresse</label>
          <input type="text" className="form-control" name="address" required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Ville</label>
          <input type="text" className="form-control" name="city" required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Téléphone</label>
          <input type="text" className="form-control" name="telephone" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Add Owner</button>
      </form>
    </div>
  );
};

export default AddOwner;
