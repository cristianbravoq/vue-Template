import axios from 'axios';

export const getCompanyInformation = async () => {
  try {
    const response = await axios.get('https://data2.talentpitch.co/api/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10');
    return response.data;
  } catch (error) {
    console.error('Error fetching trending challenges:', error);
    throw error;
  }
};