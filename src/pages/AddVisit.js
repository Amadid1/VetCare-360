import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddVisit = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: '',
    description: '',
    vetId: ''
  });

  const [vets, setVets] = useState([]);

  // Récupérer la liste des vétérinaires
  useEffect(() => {
    const fetchVets = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/vets');
        setVets(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des vétérinaires :", err);
      }
    };

    fetchVets();
  }, []);

  // Gestion du changement de champs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Soumettre le formulaire
  const handleAddVisit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/visits', {
        ...form,
        petId   // On ajoute explicitement petId ici ✅
      });
      navigate('/find-owners');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l’ajout de la visite.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Ajouter une Visite Médicale</h2>
      <form onSubmit={handleAddVisit} className="card p-4 shadow" data-aos="fade-up">
        <div className="mb-3">
          <label>Date de la visite</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Vétérinaire</label>
          <select
            className="form-select"
            name="vetId"
            value={form.vetId}
            onChange={handleChange}
            required
          >
            <option value="">-- Sélectionner un vétérinaire --</option>
            {vets.map((vet) => (
              <option key={vet._id} value={vet._id}>
                {vet.name} ({vet.specialty})
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Add Visit</button>
      </form>
    </div>
  );
};

export default AddVisit;
