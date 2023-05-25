import sequelize from "../db/client.js";

import {DataTypes, Model} from "sequelize";

class DownloadFile extends Model{};

DownloadFile.init(
    {
        download_file_name: DataTypes.STRING,
        download_file_format: DataTypes.STRING,
        download_file_img: DataTypes.BLOB, 
        downdload_file_size: DataTypes.INTEGER,
        //download_category_id: DataTypes.INTEGER
    },

    {
        sequelize, 

        tableName:"download_file"
    }
);

export default DownloadFile; 