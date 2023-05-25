import express from "express"; 

import faqCategoryController from '../controller/faqCategoryController.js';

const router = express.Router(); 

router.get('/', faqCategoryController.getAllFaqCategories);
router.get('/:id(\\d+)', faqCategoryController.getOneFaqCategory);
router.post('/', faqCategoryController.createFaqCategory);
router.patch('/:id(\\d+)', faqCategoryController.updateCategory);
router.delete('/:id(\\d+)', faqCategoryController.deleteCategory);


export default router; 