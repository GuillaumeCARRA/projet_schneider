//npm import
import express from "express"; 

//import env variables
import {} from "dotenv/config"; 

//create express server
const app = express(); 

//import routes
import router from './router/index.js'; 

// Middleware pour traiter les données provenant d'un formulaire HTML
app.use(express.urlencoded({extended: true}));

// Middleware pour traiter les données JSON
app.use(express.json());

// Utilisation du routeur pour gérer les routes
app.use(router);

// Définition du port sur lequel le serveur va écouter
const PORT = process.env.PORT || 4000;
// Démarrage du serveur en écoutant le port spécifié
app.listen(PORT, () => {
    console.log(`Serveur à l'écoute sur le port ${PORT}`);
});