import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class Product extends Model{};

Product.init(
    {
        product_name: DataTypes.STRING,
        product_img: DataTypes.BLOB, 
        product_description: DataTypes.STRING,
        product_price: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"product"
    }
);

export default Product; 