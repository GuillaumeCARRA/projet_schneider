import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class DownloadCategory extends Model{};

DownloadCategory.init(
    {
        download_category_name: DataTypes.STRING
    },

    {
        sequelize, 

        tableName:"download_category"
    }
);

export default DownloadCategory; 