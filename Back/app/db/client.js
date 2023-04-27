import { Sequelize } from "sequelize";
import {} from 'dotenv/config';

// Création d'une nouvelle instance Sequelize 
// Avec l'URL de la base de données provenant des variables d'environnement
const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
        define: {
            
            // Permet d'utiliser les noms de champs en snake_case dans les modèles
            underscored: true,

            // Par défaut, Sequelize ajoute automatiquement ces champs à chaque modèle créé 
            // pour enregistrer la date et l'heure de création et de mise à jour de chaque enregistrement dans la base de données
            // - createdAt
            // - updatedAt
            timestamps: false
        }
    }
); 

export default sequelize; 