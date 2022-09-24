import axios from 'axios'


const API_URL = '/api/products/'

// Create new goal
const getProducts = async (quertyString) => { 
  const token = thunkAPI.getState().auth.user.token
 
 
  const response = await axios.get(API_URL, {
    params: {
      ...quertyString
    }
  })
 
  return response.data
}

   
const filterService = {
    getProducts 
}

export default filterService
