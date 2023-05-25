import {} from "../models/index.js";
import DocumentationFile from "../models/documentationFile.js";
import DocumentationCategory from "../models/documentationCategory.js"; 


const getAllDocumentationFiles = async (req, res) => {
    try {
        const documentationFiles = await DocumentationFile.findAll({
            include: [
                {association: "categories"}
            ]
        });

        res.json({data: documentationFiles}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneDocumentationFile = async (req, res) => {
    try {
        const documentationId = req.params.id; 

        const oneCategory = await DocumentationFile.findOne({
            where: ({id: documentationId}), 
            include: [
                {association: "categories"}
            ]
        });

        res.json({data: oneCategory}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createDocumentationFile = async(req, res) => {
    
    const documentationFileData = {
        documentation_file_name: req.body.documentation_file_name,
        documentation_file_format: req.body.documentation_file_format,
        documentation_file_img: req.body.documentation_file_img,
        documentation_file_size: req.body.documentation_file_size,
        //documentation_category_id: req.body.documentation_category_id
    }
    
    try {

        const documentationFile = await DocumentationFile.create(documentationFileData);

        res.status(201).json(documentationFile); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateDocumentationFile = async(req, res) => {
    try {

        const updatedDocumentationFile = await DocumentationFile.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedDocumentationFile) {
            return res.status(404).json({error: "aucun document"}); 
        }

        const {
            documentation_file_name, 
            documentation_file_format, 
            documentation_file_img,
            documentation_file_size
        } = req.body

        if(documentation_file_name) {
            updatedDocumentationFile.documentation_file_name = documentation_file_name; 
        }
        if(documentation_file_format) {
            updatedDocumentationFile.documentation_file_format = documentation_file_format; 
        }
        if(documentation_file_img) {
            updatedDocumentationFile.documentation_file_img = documentation_file_img; 
        }
        if(documentation_file_size) {
            updatedDocumentationFile.documentation_file_size = documentation_file_size; 
        }
    
        await updatedDocumentationFile.save();

        res.json({data: updatedDocumentationFile});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteDocumentationFile = async (req, res) => {
    try {
        const deletedDocumentationFile = await DocumentationFile.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedDocumentationFile) {
            return res.status(404).json({error: "Aucun document"});
        }

        await deletedDocumentationFile.destroy();

        res.json({data: deletedDocumentationFile});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

const associateCategory = async(req, res) => {
    
    const documentationId = req.params.docId;
    const categoryId = req.params.catId;
    
    try {
        
        const doc = await DocumentationFile.findByPk(documentationId, {
            include: "categories"
        });

        const category = await DocumentationCategory.findByPk(categoryId);

        if (!doc) {
            res.status(404).json({
                error: "Pas de documentation à cet id"
            });
            return;
        }

        if (!category) {
            res.status(404).json({
                error: "Pas de catégorie à cet id"
            });
            return;
        }

        await doc.addCategories(category);
        res.json({data: doc}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

const dissociateCategory = async(req, res) => {
    const documentationId = req.params.docId;
    const categoryId = req.params.catId;

    try {
        const doc = await DocumentationFile.findByPk(documentationId)

        const category = await DocumentationCategory.findByPk(categoryId);

        if (!doc) {
            res.status(404).json({
                error: "Pas de documentation à cet id"
            });
            return;
        }

        if (!category) {
            res.status(404).json({
                error: "Pas de catégorie à cet id"
            });
            return;
        }

        await doc.removeCategories(category);
        res.json({data: doc}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}
 
export default {
    getAllDocumentationFiles,
    getOneDocumentationFile, 
    createDocumentationFile, 
    updateDocumentationFile,
    deleteDocumentationFile,
    associateCategory,
    dissociateCategory
}