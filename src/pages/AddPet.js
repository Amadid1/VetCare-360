import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddPet = () => {
  const { ownerId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    type: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPet = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/pets', {
        ...form,
        ownerId
      });
      navigate('/find-owners');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l’ajout de l’animal.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Ajouter un Animal</h2>
      <form onSubmit={handleAddPet} className="card p-4 shadow" data-aos="fade-up">
        <div className="mb-3">
          <label>Nom de l'animal</label>
          <input type="text" className="form-control" name="name" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Date de naissance</label>
          <input type="date" className="form-control" name="birthDate" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <input type="text" className="form-control" name="type" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-info">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
