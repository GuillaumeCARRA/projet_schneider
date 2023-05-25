import DownloadFile from "../models/downloadFile.js";
import {} from "../models/index.js";

const getAllDownloadFiles = async (req, res) => {
    try {
        const downloadFiles = await DownloadFile.findAll({
            include: [
                {association: "dlCategories"}
            ]
        });

        res.json({data: downloadFiles}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneDownloadFile = async (req, res) => {
    try {
        const downloadId = req.params.id; 

        const oneDownload = await DownloadFile.findOne({
            where: ({id: downloadId}), 
            include: [
                {association: "dlCategories"}
            ]
        });

        res.json({data: oneDownload}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createDownloadFile = async(req, res) => {
    
    const downloadFileData = {
        download_file_name: req.body.download_file_name,
        download_file_format: req.body.download_file_format,
        download_file_img: req.body.download_file_img,
        downdload_file_size: req.body.downdload_file_size,
        //download_category_id: req.body.download_category_id
    }
    
    try {

        const downloadFile = await DownloadFile.create(downloadFileData);

        res.statut(201).json(downloadFile); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateDownloadFile = async(req, res) => {
    try {

        const updatedDownloadFile = await DownloadFile.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedDownloadFile) {
            return res.status(404).json({error: "aucun téléchargement"}); 
        }

        const {
            download_file_name, 
            download_file_format, 
            download_file_img,
            downdload_file_size
        } = req.body

        if(download_file_name) {
            updatedDownloadFile.download_file_name = download_file_name; 
        }
        if(download_file_format) {
            updatedDownloadFile.download_file_format = download_file_format; 
        }
        if(download_file_img) {
            updatedDownloadFile.download_file_img = download_file_img; 
        }
        if(downdload_file_size) {
            updatedDownloadFile.downdload_file_size = downdload_file_size; 
        }
    
        await updatedDownloadFile.save();

        res.json({data: updatedDownloadFile});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteDownloadFile = async (req, res) => {
    try {
        const deletedDownloadFile = await DownloadFile.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedDownloadFile) {
            return res.status(404).json({error: "Aucun document"});
        }

        await deletedDownloadFile.destroy();

        res.json({data: deletedDownloadFile});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllDownloadFiles,
    getOneDownloadFile, 
    createDownloadFile, 
    updateDownloadFile,
    deleteDownloadFile
}