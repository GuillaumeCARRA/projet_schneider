import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class FaqCategory extends Model{};

FaqCategory.init(
    {
        faq_category_name: DataTypes.STRING
    },

    {
        sequelize, 

        tableName:"faq_category"
    }
);

export default FaqCategory; 