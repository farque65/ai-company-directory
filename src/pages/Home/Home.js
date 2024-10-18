import React, { useEffect, useState } from 'react';
import AiCompanyList from '../../components/AiCompanyList/AiCompanyList';
import FilterOptions from '../../components/FilterOptions/FilterOptions';
import SearchBar from '../../components/SearchBar/SearchBar';
import { getAiCompany } from '../../services/api';
import './Home.css';

function Home() {
  const [aicompanies, setAiCompanies] = useState([]);
  const [filteredAiCompanies, setFilteredAiCompanies] = useState([]);
  const [sortOption, setSortOption] = useState('name');

  useEffect(() => {
    fetchAiCompanys();
  }, []);

  const fetchAiCompanys = async () => {
    const data = await getAiCompany();
    setAiCompanies(data);
    setFilteredAiCompanies(data);
  };

  const handleSearch = (searchTerm) => {
    const filtered = aicompanies.filter(aicompany => 
      aicompany?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAiCompanies(filtered);
  };

  const handleFilter = (filters) => {
    const filtered = aicompanies.filter(aicompany => 
      (aicompany?.industry != '')
    );
    setFilteredAiCompanies(filtered);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sorted = [...filteredAiCompanies].sort((a, b) => {

      return 0;
    });
    setFilteredAiCompanies(sorted);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilter={handleFilter} />
      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="industry">Industry</option>
        </select>
      </div>
      <AiCompanyList aicompanys={filteredAiCompanies} />
      {/* <Reviews aiCompanyId={aiCompany.id} reviews={aiCompany.reviews} /> */}
    </div>
  );
}

export default Home;