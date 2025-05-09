import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditOwner = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    telephone: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/owners`);
        const owner = res.data.find(o => o._id === id);
        if (owner) setForm(owner);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOwner();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/owners/${id}`, form);
      navigate('/find-owners');
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la mise à jour.");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-down">Modifier un Propriétaire</h2>
      <form onSubmit={handleUpdate} className="card p-4 shadow" data-aos="fade-up">
        <div className="mb-3"><label>Prénom</label>
          <input type="text" className="form-control" name="firstName" value={form.firstName} required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Nom</label>
          <input type="text" className="form-control" name="lastName" value={form.lastName} required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Adresse</label>
          <input type="text" className="form-control" name="address" value={form.address} required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Ville</label>
          <input type="text" className="form-control" name="city" value={form.city} required onChange={handleChange} />
        </div>
        <div className="mb-3"><label>Téléphone</label>
          <input type="text" className="form-control" name="telephone" value={form.telephone} required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-warning">Update Owner</button>
      </form>
    </div>
  );
};

export default EditOwner;
