import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prd-code-crafters-api.azurewebsites.net/api/v1/CodeCraftres',
});

export default api;
