import express from "express"; 

import faqAnswerController from '../controller/faqAnswerController.js';


const router = express.Router(); 

router.get('/', faqAnswerController.getAllFaqAnswers);
router.get('/:id(\\d+)', faqAnswerController.getOneFaqAnswer);
router.post('/', faqAnswerController.createFaqAnswer);
router.patch('/:id(\\d+)', faqAnswerController.updateFaqAnswer);
router.delete('/:id(\\d+)', faqAnswerController.deleteFaqAnswer);



export default router; 