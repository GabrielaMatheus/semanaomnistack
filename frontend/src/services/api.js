import axios from 'axios';
//baseurl é a parte que vai ser mantida em todas as chamadas
//exportar um arquivo é importante pois assim os outros podem importa-lo
const api = axios.create({
  baseURL:'http://localhost:3333',  
})

export default api; 