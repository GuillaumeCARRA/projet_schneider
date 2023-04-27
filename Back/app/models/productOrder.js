import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class ProductOrder extends Model{};

ProductOrder.init(
    {
        product_order_quantity: DataTypes.INTEGER,
        product_oder_total_amount: DataTypes.INTEGER, 
        product_order_date_purchase: DataTypes.DATE,
        product_id: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"product_order"
    }
);

export default ProductOrder; 