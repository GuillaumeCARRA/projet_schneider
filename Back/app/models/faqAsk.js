import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class FaqAsk extends Model{};

FaqAsk.init(
    {
        ask: DataTypes.STRING,
        faq_answer_id: DataTypes.INTEGER,
        faq_category_id: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"faq_ask"
    }
);

export default FaqAsk; 