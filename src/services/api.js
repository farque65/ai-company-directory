
const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL
const aiCompanies = require('./initialAiCompanyList');

type AiCompany = {
  tagline: string;
  name: string;
  industry: string;
  description: string;
};

// Create an empty object to store our data
let data = {
  companies: [],
  totalCompanies: 0,
  industries: new Set()
};

// Use forEach to iterate over the aiCompanies array
aiCompanies.forEach(company => {
  // Add each company to the companies array
  data.companies.push(company);
  
  // Increment the total number of companies
  data.totalCompanies++;
  
  // Add the industry to the set of industries
  data.industries.add(company.industry);
});

export const getAiCompany = async () => {
  try {
    //const response = await axios.get(`${API_BASE_URL}/ai-company`);
    //return response.data;
    return aiCompanies;
  } catch (error) {
    console.error('Error fetching aicompanies:', error);
    return [];
  }
};

export const getAiCompanyById = async (id) => {
  try {
    //const response = await axios.get(`${API_BASE_URL}/ai-companys/${id}`);
    //return response.data;
    return aiCompanies;
  } catch (error) {
    console.error(`Error fetching ai company with id ${id}:`, error);
    return null;
  }
};

export const getAiCompanyByName = async (name) => {
  try {
    //const response = await axios.get(`${API_BASE_URL}/ai-companys/${id}`);
    //return response.data;
    return aiCompanies;
  } catch (error) {
    console.error(`Error fetching ai company with id ${name}:`, error);
    return null;
  }
};