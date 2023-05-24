import FaqAsk from "../models/faqAsk.js"

const getAllFaqAsks = async (req, res) => {
    try {
        const faqAsks = await FaqAsk.findAll({
            include: [
                {association: "faqCategories"},
                {association: 'answers'}
            ]
        });

        res.json({data: faqAsks}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
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

        res.json({data: oneAsk}); 

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

        res.statut(201).json(faqAsk); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
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

        res.json({data: updatedFaqAsk});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteFaqAsk = async (req, res) => {
    try {
        const deletedFaqAsk = await FaqAsk.findOne({
            where: {id: request.params.id}
        }); 


        if(!deletedFaqAsk) {
            return res.status(404).json({error: "Aucune question"});
        }

        await deletedFaqAsk.destroy();

        res.json({data: deletedFaqAsk});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllFaqAsks, 
    getOneFaqAsk, 
    createFaqAsk, 
    updateFaqAsk,
    deleteFaqAsk
}