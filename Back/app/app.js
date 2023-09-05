//npm import
import express from "express"; 

//import env variables
import {} from "dotenv/config"; 

import cors from "cors";

import activedirectory from "activedirectory"; 

import path from 'path'; 

//create express server
const app = express(); 

//import routes
import router from './router/index.js'; 

// Middleware pour traiter les données provenant d'un formulaire HTML
app.use(express.urlencoded({extended: true}));

// Middleware pour traiter les données JSON
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type'
}));


app.get('/', (req, res) => {
    var userprofile = process.env.USERPROFILE;
    if (userprofile) {
        const user = path.basename(userprofile);
        res.json({ userProfile: user });
    } else {
        res.json({ userProfile: null });
    }
});

// Utilisation du routeur pour gérer les routes
app.use(router);

// Définition du port sur lequel le serveur va écouter
const PORT = process.env.PORT || 4000;
// Démarrage du serveur en écoutant le port spécifié
app.listen(PORT, () => {
    console.log(`Serveur à l'écoute sur le port ${PORT}`);
});