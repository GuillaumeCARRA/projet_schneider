import FaqAnswer from "../models/faqAnswer.js";
import {} from "../models/index.js";


const getAllFaqAnswers = async (req, res) => {
    try {
        const faqAnswers = await FaqAnswer.findAll({
            include: [
                {association: "asks"}
            ]
        });

        res.json({data: faqAnswers}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
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

        res.json({data: oneAnswer}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createFaqAnswer = async(req, res) => {
    
    const faqAnswerData = {
        answer: req.body.answer
    }
    
    try {

        const faqAnswer = await FaqAnswer.create(faqAnswerData);

        res.status(201).json(faqAnswer); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
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
            answer
        } = req.body

        if(answer) {
            updatedFaqAnswer.answer = answer; 
        }

        await updatedFaqAnswer.save();

        res.json({data: updatedFaqAnswer});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteFaqAnswer = async (req, res) => {
    try {
        const deletedFaqAnswer = await FaqAnswer.findOne({
            where: {id: request.params.id}
        }); 


        if(!deletedFaqAnswer) {
            return res.status(404).json({error: "Aucune réponse"});
        }

        await deletedFaqAnswer.destroy();

        res.json({data: deletedFaqAnswer});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllFaqAnswers, 
    getOneFaqAnswer, 
    createFaqAnswer, 
    updateFaqAnswer,
    deleteFaqAnswer
}