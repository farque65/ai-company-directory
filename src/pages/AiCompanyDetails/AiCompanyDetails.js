import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAiCompanyById } from '../../services/api';
import './AiCompanyDetails';

function AiCompanyDetails() {
  const [aiCompany, setAiCompany] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchAiCompanyDetails = async () => {
      const data = await getAiCompanyById(name);
      setAiCompany(data);
    };
    fetchAiCompanyDetails();
  }, [id]);

  if (!aiCompany) return <div>Loading...</div>;

  return (
    <div className="ai-company-details">
      <h1>{aiCompany.name}</h1>
      {/* <img src={aiCompany.image} alt={aiCompany.name} /> */}
      <p>tagline: {aiCompany.tagline}</p>
      <p>Industry: {aiCompany.industry}</p>
      <p>Description: {aiCompany.description}</p>
    </div>
  );
}

export default AiCompanyDetails;