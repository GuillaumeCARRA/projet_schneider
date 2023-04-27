import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class OrderHistory extends Model{};

OrderHistory.init(
    {
        product_order_id: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"order_history"
    }
);

export default OrderHistory; 