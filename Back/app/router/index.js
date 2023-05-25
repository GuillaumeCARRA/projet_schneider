import express from "express"; 

import documentationCategoryRouter from './documentationCategoryRouter.js';
import documentationFileRouter from './documentationFileRouter.js'; 
import downloadCategoryRouter from './downloadCategoryRouter.js';
import downloadFileRouter from './downloadFileRouter.js'; 
import faqAnswerRouter from './faqAnswerRouter.js'; 
import faqAskRouter from './faqAskRouter.js'; 
import faqCategoryRouter from './faqCategoryRouter.js'; 
import orderHistoryRouter from './orderHistoryRouter.js'; 
import productOrderRouter from './productOrderRouter.js';
import productRouter from './productRouter.js';


const router = express.Router(); 

router.use('/documentation-category', documentationCategoryRouter);
router.use('/documentation-file', documentationFileRouter);
router.use('/download-category', downloadCategoryRouter);
router.use('/download-file', downloadFileRouter);
router.use('/faq-answer', faqAnswerRouter);
router.use('/faq-ask', faqAskRouter);
router.use('/faq-category', faqCategoryRouter);
router.use('/order-history', orderHistoryRouter);
router.use('/product-order', productOrderRouter);
router.use('/product', productRouter);


export default router; 