import {} from "../models/index.js";
import FaqAsk from "../models/faqAsk.js";
import FaqCategory from "../models/faqCategory.js";


const getAllFaqAsks = async (req, res) => {
    try {
        const faqAsks = await FaqAsk.findAll({
            include: [
                {association: "faqCategories"},
                {association: 'answers'}
            ]
        });

        return res.json({data: faqAsks}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const getOneFaqAsk = async (req, res) => {
    try {
        const faqAskId = req.params.id; 

        const oneAsk = await FaqAsk.findOne({
            where: ({id: faqAskId}), 
            include: [
                {association: "faqCategories"},
                {association: 'answers'}
            ]
        });

        if(!oneAsk) {
            return res.status(404).json({error: "pas de question à cet id"});
        } else {
            return res.json({data: oneAsk}); 
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createFaqAsk = async(req, res) => {
    
    const faqAskData = {
        ask: req.body.ask,
        faq_answer_id: req.body.faq_answer_id,
        faq_category_id: req.body.faq_category_id
    }
    
    try {

        const faqAsk = await FaqAsk.create(faqAskData);

        return res.status(201).json(faqAsk); 
        
    } catch (error) {
        console.log(error);
       return res.status(500).json({error});
    }
}

const updateFaqAsk = async(req, res) => {
    try {

        const updatedFaqAsk = await FaqAsk.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedFaqAsk) {
            return res.status(404).json({error: "aucunes questions"}); 
        }

        const {
            ask
        } = req.body

        if(ask) {
            updatedFaqAsk.ask = ask; 
        }

        await updatedFaqAsk.save();

       return res.json({data: updatedFaqAsk});
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({error});
    }
}

const deleteFaqAsk = async (req, res) => {
    try {
        const deletedFaqAsk = await FaqAsk.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedFaqAsk) {
            return res.status(404).json({error: "Aucune question"});
        }

        await deletedFaqAsk.destroy();

       return res.json({data: deletedFaqAsk});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
}

const associateFaqCategory= async (req, res) => {
    const faqId = req.params.faqId; 
    const faqCategoryId = req.params.faqCatId; 

    try {

        const faq = await FaqAsk.findByPk(faqId, {
            include: "faqCategories"
        });

        const faqCat = await FaqCategory.findByPk(faqCategoryId);

        if (!faq) {
            res.status(404).json({
                error: "Pas de question à cet id"
            });
            return;
        }

        if (!faqCat) {
            res.status(404).json({
                error: "Pas de catégorie à cet id"
            });
            return;
        }

        await faq.addFaqCategories(faqCat);
        res.json({data: faq});
        
    } catch (error) {
        console.log(error);
       return res.status(500).json({ error });
    }
}

const dissociateFaqCategory = async (req, res) => {
    
    const faqId = req.params.faqId; 
    const faqCategoryId = req.params.faqCatId; 
    
    try {

        const faq = await FaqAsk.findByPk(faqId);

        const faqCat = await FaqCategory.findByPk(faqCategoryId);
        
        if (!faq) {
            res.status(404).json({
                error: "Pas de question à cet id"
            });
            return;
        }

        if (!faqCat) {
            res.status(404).json({
                error: "Pas de catégorie à cet id"
            });
            return;
        }

        await faq.removeFaqCategories(faqCat);
       return res.json({data: faq});

    } catch (error) {
        console.log(error);
       return res.status(500).json({ error });
    }
}

export default {
    getAllFaqAsks, 
    getOneFaqAsk, 
    createFaqAsk, 
    updateFaqAsk,
    deleteFaqAsk,
    associateFaqCategory,
    dissociateFaqCategory
}