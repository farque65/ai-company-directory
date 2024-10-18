import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  width: 300px;
`;

function AiCompanyCard({ aicompany }) {
  return (
    <Card>
      <h2>{aicompany.name}</h2>
      <p>Industry: {aicompany.industry}</p>
      <p>Tagline: {aicompany.tagline}</p>
      <Link to={`/aicompany/${aicompany.name}`}>View Details</Link>
    </Card>
  );
}

export default AiCompanyCard;