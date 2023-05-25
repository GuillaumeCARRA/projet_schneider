import express from "express"; 

import faqAskController from '../controller/faqAskController.js'; 

const router = express.Router(); 

router.get('/', faqAskController.getAllFaqAsks);
router.get('/:id(\\d+)', faqAskController.getOneFaqAsk);
router.post('/', faqAskController.createFaqAsk);
router.patch('/:id(\\d+)', faqAskController.updateFaqAsk);
router.delete('/:id(\\d+)', faqAskController.deleteFaqAsk);

//router.patch('/:dlId/download/:catDlId', downloadFileController.associateDlCategory);
//router.delete('/:dlId/download/:catDlId', downloadFileController.dissociateDlCategory);


export default router; 