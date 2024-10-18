import React, { useState } from 'react';
import './FilterOptions.css';

function FilterOptions({ onFilter }) {
  const [industry, setIndustry] = useState('');

  const handleFilter = () => {
    onFilter({ industry });
  };

  return (
    <div className="filter-options">
      <h3>Filter Options</h3>
      <div>
        <label>Industry:</label>
        <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="">All</option>
          <option value="health">Health</option>
          <option value="agriculture">Agriculture</option>
          <option value="biotech">Biotech</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
}

export default FilterOptions;