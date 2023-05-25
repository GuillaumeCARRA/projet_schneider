import express from "express"; 

import faqAskController from '../controller/faqAskController.js'; 

const router = express.Router(); 

router.get('/', faqAskController.getAllFaqAsks);
router.get('/:id(\\d+)', faqAskController.getOneFaqAsk);
router.post('/', faqAskController.createFaqAsk);
router.patch('/:id(\\d+)', faqAskController.updateFaqAsk);
router.delete('/:id(\\d+)', faqAskController.deleteFaqAsk);

router.patch('/:faqId/download/:faqCatId', faqAskController.associateFaqCategory);
router.delete('/:faqId/download/:faqCatId', faqAskController.dissociateFaqCategory);


export default router; 