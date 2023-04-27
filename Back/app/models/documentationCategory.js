import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class DocumentationCategory extends Model{};

DocumentationCategory.init(
    {
        documentation_category_name: DataTypes.STRING
    },

    {
        sequelize, 

        tableName:"documentation_category"
    }
);

export default DocumentationCategory; 