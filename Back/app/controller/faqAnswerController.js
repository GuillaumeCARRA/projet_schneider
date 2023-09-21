import FaqAnswer from "../models/faqAnswer.js";
import {} from "../models/index.js";


const getAllFaqAnswers = async (req, res) => {
    try {
        const faqAnswers = await FaqAnswer.findAll({
            include: [
                {association: "asks"}
            ]
        });

        return res.json({data: faqAnswers}); 
    } catch (error) {
        return res.status(500).json({error}); 
    }
}

const getOneFaqAnswer = async (req, res) => {
    try {
        const faqAnswerId = req.params.id; 

        const oneAnswer = await FaqAnswer.findOne({
            where: ({id: faqAnswerId}), 
            include: [
                {association: "asks"}
            ]
        });

        if(!oneAnswer) {
            return res.status(404).json({error: "pas de réponse à cet id"});
        } else {
            return res.json({data: oneAnswer});    
        }

    } catch (error) {
        return res.status(500).json({error}); 
    }
}

const createFaqAnswer = async(req, res) => {
    
    const faqAnswerData = {
        answer: req.body.answer, 
        faq_ask_id: req.body.faq_ask_id
    }
    
    try {

        const faqAnswer = await FaqAnswer.create(faqAnswerData);

        return res.status(201).json(faqAnswer); 
        
    } catch (error) {
        return res.status(500).json({error});
    }
}

const updateFaqAnswer = async(req, res) => {
    try {

        const updatedFaqAnswer = await FaqAnswer.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedFaqAnswer) {
            return res.status(404).json({error: "aucunes réponses"}); 
        }

        const {
            answer, 
            faq_ask_id
        } = req.body

        if(answer) {
            updatedFaqAnswer.answer = answer; 
        }

        if(faq_ask_id) {
            updatedFaqAnswer.faq_ask_id = faq_ask_id; 
        }

        await updatedFaqAnswer.save();

        return res.json({data: updatedFaqAnswer});
        
    } catch (error) {
        return res.status(500).json({error});
    }
}

const deleteFaqAnswer = async (req, res) => {
    try {
        const deletedFaqAnswer = await FaqAnswer.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedFaqAnswer) {
            return res.status(404).json({error: "Aucune réponse"});
        }

        await deletedFaqAnswer.destroy();

        return res.json({data: deletedFaqAnswer});

    } catch (error) {
        return res.status(500).json({ error });
    }
}

export default {
    getAllFaqAnswers, 
    getOneFaqAnswer, 
    createFaqAnswer, 
    updateFaqAnswer,
    deleteFaqAnswer
}