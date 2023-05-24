import FaqCategory from "../models/faqCategory.js"; 

const getAllFaqCategories = async (req, res) => {
    try {
        const faqCategories = await FaqCategory.findAll({
            include: [
                {association: "asks"}
            ]
        });

        res.json({data: faqCategories}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
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

        res.json({data: oneFaqCategory}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createFaqCategory = async(req, res) => {
    
    const faqCategoryData = {
        faq_category_name: req.body.faq_category_name
    }
    
    try {

        const faqCategory = await FaqCategory.create(faqCategoryData);

        res.statut(201).json(faqCategory); 
        
    } catch (error) {
        console.log(error);
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

        res.json({data: updatedFaqCategory});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await FaqCategory.findOne({
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
    getAllFaqCategories, 
    getOneFaqCategory, 
    createFaqCategory, 
    updateCategory,
    deleteCategory
}