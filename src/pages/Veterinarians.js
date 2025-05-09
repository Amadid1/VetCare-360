import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';

const Veterinarians = () => {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVets = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/vets');

        setVets(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchVets();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" data-aos="fade-up">Nos Vétérinaires</h2>
      <table className="table table-bordered table-striped shadow" data-aos="fade-up">
        <thead className="table-primary text-center">
          <tr>
            <th>Nom</th>
            <th>Spécialité</th>
          </tr>
        </thead>
        <tbody>
          {vets.map((vet, index) => (
            <tr key={index}>
              <td>{vet.name}</td>
              <td>{vet.specialty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Veterinarians;
