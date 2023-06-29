import axios from "axios"; 

// on créer une instance qui va me permettre
// d'utiliser un préfixe d'url 
// lorsque nous faisons une requête
// nous pouvons ajouter déjà l'url de début
const instance = axios.create({
    baseURL: "http://localhost:3001"
}); 

export default instance; 