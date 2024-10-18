import React, { useState } from 'react';
import AiCompanyCard from '../AiCompanyCard/AiCompanyCard';
import './AiCompanyList.css';

function AiCompanyList({ aicompanys }) {
  const [currentPage, setCurrentPage] = useState(1);
  const aiCompanysPerPage = 9;

  const indexOfLastAiCompany = currentPage * aiCompanysPerPage;
  const indexOfFirstAiCompany = indexOfLastAiCompany - aiCompanysPerPage;
  const currentAiCompanys = aicompanys.slice(indexOfFirstAiCompany, indexOfLastAiCompany);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ai-company-list">
      <div className="ai-company-grid">
        {currentAiCompanys.map(aicompany => (
          <AiCompanyCard key={aicompany.id} aicompany={aicompany} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(aicompanys.length / aiCompanysPerPage) }).map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AiCompanyList;