import axios from 'axios';

export const createCatagory = async (formData) => {
  const config = {
    header: {
      "content-type": "application/json"
    }
  }

  const response = await axios.post('/api/catagory', formData, config);

  return response;
}