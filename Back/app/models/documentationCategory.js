import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

// Définition d'une classe DocumentationCategory 
// qui hérite de la classe Model de Sequelize
class DocumentationCategory extends Model{};

DocumentationCategory.init(
    {
        // Définition du modèle de la table documentation_category, 
        // avec un champ documentation_category_name de type STRING
        documentation_category_name: DataTypes.STRING
    },

    {
        // Spécification de l'instance Sequelize à utiliser 
        // pour se connecter à la base de données
        sequelize, 

        // Spécification du nom de la table dans la base de données correspondant à ce modèle
        tableName:"documentation_category"
    }
);

export default DocumentationCategory; 