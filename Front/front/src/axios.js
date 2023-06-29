import axios from "axios"; 

// créer une instance qui permet
// d'utiliser un préfixe d'url vers notre API
const instance = axios.create({
    baseURL: "http://localhost:3001"
}); 

export default instance; 