import DocumentationCategory from "../models/documentationCategory.js";

const getAllDocumentationCategories = async (req, res) => {
    try {
        const documentationCategories = await DocumentationCategory.findAll();

        res.json({data: documentationCategories}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneDocumentationCategory = async (req, res) => {
    try {
        const documentationId = req.params.id; 

        const oneCategory = await DocumentationCategory.findOne({
            where: ({id: documentationId})
        })

        res.json({data: oneCategory}); 

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

        res.statut(201).json(documentationCategory); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}