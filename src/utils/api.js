import axios from "axios";
//axios: to perform rest calls. 
const api = axios.create({ 
baseURL: "/api:", // mean your local host 
headers: {"Content-Type": "application/json"}, // mean 
});

export default api; 
