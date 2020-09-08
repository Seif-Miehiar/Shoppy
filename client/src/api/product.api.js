import axios from "axios"


export const createProduct = async (formData) => {

  const config = {
    header: {
      "content-type": "application/json"
    }
  }

  const response = await axios.post('/api/product', formData, config);

  return response

}