import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FindOwners = () => {
  const [lastName, setLastName] = useState('');
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/owners/search?lastName=${lastName}`);
      setOwner(res.data);
      setError('');
    } catch (err) {
      setOwner(null);
      setError("Propriétaire non trouvé.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Rechercher un Propriétaire</h2>
      
      <div className="input-group mb-3" data-aos="fade-up">
        <input
          type="text"
          className="form-control"
          placeholder="Nom de famille"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Find Owner</button>
        <button className="btn btn-success ms-2" onClick={() => navigate('/add-owner')}>Add Owner</button>
      </div>

      {error && <div className="alert alert-danger" data-aos="fade-up">{error}</div>}

      {owner && (
        <>
          <div className="card mt-4 shadow" data-aos="fade-up">
            <div className="card-body">
              <h5 className="card-title">{owner.firstName} {owner.lastName}</h5>
              <p className="card-text">
                📍 {owner.address}, {owner.city}<br />
                📞 {owner.telephone}
              </p>
              <button className="btn btn-warning me-2" onClick={() => navigate(`/edit-owner/${owner._id}`)}>Edit Owner</button>
              <button className="btn btn-info" onClick={() => navigate(`/add-pet/${owner._id}`)}>Add Pet</button>
            </div>
          </div>

          {owner.pets && owner.pets.length > 0 && (
            <div className="mt-4">
              <h5>Animaux :</h5>
              {owner.pets.map((pet) => (
                <div key={pet._id} className="card mb-3 ps-3 pt-2 shadow-sm">
                  <p className="mb-1"><strong>Nom :</strong> {pet.name}</p>
                  <p className="mb-1"><strong>Type :</strong> {pet.type}</p>
                  <p className="mb-2"><strong>Date de naissance :</strong> {new Date(pet.birthDate).toLocaleDateString()}</p>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => navigate(`/add-visit/${pet._id}`)}
                  >
                    Add Visit
                  </button>

                  {/* Affichage des visites */}
                  {pet.visits && pet.visits.length > 0 && (
                    <div className="ms-3 mb-3">
                      <h6>Visites :</h6>
                      {pet.visits.map((visit) => (
                        <div key={visit._id} className="border-start ps-3 mb-2">
                          <p className="mb-1"><strong>Date :</strong> {new Date(visit.date).toLocaleDateString()}</p>
                          <p className="mb-1"><strong>Description :</strong> {visit.description}</p>
                          <p className="mb-1">
                            <strong>Vétérinaire :</strong>{' '}
                            {visit.vetId ? `${visit.vetId.name} (${visit.vetId.specialty})` : 'Non spécifié'}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FindOwners;
