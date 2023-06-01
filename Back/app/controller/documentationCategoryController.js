import {} from "../models/index.js";
import DocumentationCategory from "../models/documentationCategory.js";


const getAllDocumentationCategories = async (req, res) => {
    try {
        const documentationCategories = await DocumentationCategory.findAll({
            include: [
                {association: "files"}
            ]
        });


        return res.json({data: documentationCategories}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const getOneDocumentationCategory = async (req, res) => {
    try {
        const documentationId = req.params.id; 

        const oneCategory = await DocumentationCategory.findOne({
            where: ({id: documentationId}), 
            include: [
                {association: "files"}
            ]
        });

        if(!oneCategory) {
            return res.status(404).json({error: "pas de catégorie à cet id"})
        } else {
            return res.json({data: oneCategory}); 
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createDocumentationCategory = async(req, res) => {
    
    const documentationCategoryData = {
        documentation_category_name: req.body.documentation_category_name
    }
    
    try {

        const documentationCategory = await DocumentationCategory.create(documentationCategoryData);

        res.status(201).json(documentationCategory); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateCategory = async(req, res) => {
    try {

        const updatedCategory = await DocumentationCategory.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedCategory) {
            return res.status(404).json({error: "aucunes catégories"}); 
        }

        const {
            documentation_category_name
        } = req.body

        if(documentation_category_name) {
            updatedCategory.documentation_category_name = documentation_category_name; 
        }

        await updatedCategory.save();

        res.json({data: updatedCategory});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await DocumentationCategory.findOne({
            where: {id: req.params.id}
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
    getAllDocumentationCategories, 
    getOneDocumentationCategory, 
    createDocumentationCategory, 
    updateCategory,
    deleteCategory
}