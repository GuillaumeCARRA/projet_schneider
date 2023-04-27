import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class Role extends Model{};

Role.init(
    {
        label: DataTypes.STRING
    },

    {
        sequelize, 

        tableName:"role"
    }
);

export default Role; 