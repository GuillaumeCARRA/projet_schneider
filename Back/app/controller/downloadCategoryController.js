import DownloadCategory from "../models/downloadCategory.js"; 
import {} from "../models/index.js";

const getAllDownloadCategories = async (req, res) => {
    try {
        const downloadCategories = await DownloadCategory.findAll({
            include: [
                {association: "dlFiles"}
            ]
        });

        res.json({data: downloadCategories}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneDownloadCategory = async (req, res) => {
    try {
        const downloadCategoryId = req.params.id; 

        const oneCategory = await DownloadCategory.findOne({
            where: ({id: downloadCategoryId}), 
            include: [
                {association: "dlFiles"}
            ]
        });

        res.json({data: oneCategory}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createDownloadCategory = async(req, res) => {
    
    const downloadCategoryData = {
        download_category_name: req.body.download_category_name
    }
    
    try {

        const downloadCategory = await DownloadCategory.create(downloadCategoryData);

        res.status(201).json(downloadCategory); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateCategory = async(req, res) => {
    try {

        const updatedDownloadCategory = await DownloadCategory.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedDownloadCategory) {
            return res.status(404).json({error: "aucunes catégories"}); 
        }

        const {
            download_category_name
        } = req.body

        if(download_category_name) {
            updatedDownloadCategory.download_category_name = download_category_name; 
        }

        await updatedDownloadCategory.save();

        res.json({data: updatedDownloadCategory});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await DownloadCategory.findOne({
            where: {id: request.params.id}
        }); 


        if(!deletedCategory) {
            return res.status(404).json({error: "Aucune catégorie"});
        }

        await deletedCategory.destroy();

        res.json({data: deletedCategory});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllDownloadCategories, 
    getOneDownloadCategory, 
    createDownloadCategory, 
    updateCategory,
    deleteCategory
}