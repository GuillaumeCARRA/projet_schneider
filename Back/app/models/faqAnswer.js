import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class FaqAnswer extends Model{};

FaqAnswer.init(
    {
        answer: DataTypes.STRING
    },

    {
        sequelize, 

        tableName:"faq_answer"
    }
);

export default FaqAnswer; 