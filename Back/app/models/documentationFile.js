import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

// Définition d'une classe DocumentationCategory 
// qui hérite de la classe Model de Sequelize
class DocumentationFile extends Model{};

DocumentationFile.init(
    {
        // Définition du modèle de la table documentation_category, 
        // avec un champ documentation_category_name de type STRING
        documentation_file_name: DataTypes.STRING,
        documentation_file_format: DataTypes.STRING,
        documentation_file_img: DataTypes.BLOB, 
        documentation_file_size: DataTypes.INTEGER,
        documentation_category_id: DataTypes.INTEGER
    },

    {
        // Spécification de l'instance Sequelize à utiliser 
        // pour se connecter à la base de données
        sequelize, 

        // Spécification du nom de la table dans la base de données correspondant à ce modèle
        tableName:"documentation_file"
    }
);

export default DocumentationFile; 