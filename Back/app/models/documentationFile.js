import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class DocumentationFile extends Model{};

DocumentationFile.init(
    {
        documentation_file_name: DataTypes.STRING,
        documentation_file_format: DataTypes.STRING,
        documentation_file_img: DataTypes.BLOB, 
        documentation_file_size: DataTypes.INTEGER,
        documentation_category_id: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"documentation_file"
    }
);

export default DocumentationFile; 