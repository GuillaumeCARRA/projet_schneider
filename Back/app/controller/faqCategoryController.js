import FaqCategory from "../models/faqCategory.js"; 
import {} from "../models/index.js";

const getAllFaqCategories = async (req, res) => {
    try {
        const faqCategories = await FaqCategory.findAll({
            include: [
                {association: "asks"}
            ]
        });

        return res.json({data: faqCategories}); 
    } catch (error) {
        return res.status(500).json({error}); 
    }
}

const getOneFaqCategory = async (req, res) => {
    try {
        const faqCategoryId = req.params.id; 

        const oneFaqCategory = await FaqCategory.findOne({
            where: ({id: faqCategoryId}), 
            include: [
                {association: "asks"}
            ]
        });

        if(!oneFaqCategory) {
            return res.status(404).json({error: "pas de catégorie à cet id"});
        } else {
            return res.json({data: oneFaqCategory});
        }

         

    } catch (error) {
        return res.status(500).json({error}); 
    }
}

const createFaqCategory = async(req, res) => {
    
    const faqCategoryData = {
        faq_category_name: req.body.faq_category_name
    }
    
    try {

        const faqCategory = await FaqCategory.create(faqCategoryData);

        return res.status(201).json(faqCategory); 
        
    } catch (error) {
        res.status(500).json({error});
    }
}

const updateCategory = async(req, res) => {
    try {

        const updatedFaqCategory = await FaqCategory.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedFaqCategory) {
            return res.status(404).json({error: "aucunes catégories"}); 
        }

        const {
            faq_category_name
        } = req.body

        if(faq_category_name) {
            updatedFaqCategory.faq_category_name = faq_category_name; 
        }

        await updatedFaqCategory.save();

        return res.json({data: updatedFaqCategory});
        
    } catch (error) {

        res.status(500).json({error});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await FaqCategory.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedCategory) {
            return res.status(404).json({error: "Aucune catégorie"});
        }

        await deletedCategory.destroy();

        return res.json({data: deletedCategory});

    } catch (error) {
        return res.status(500).json({ error });
    }
}

export default {
    getAllFaqCategories, 
    getOneFaqCategory, 
    createFaqCategory, 
    updateCategory,
    deleteCategory
}