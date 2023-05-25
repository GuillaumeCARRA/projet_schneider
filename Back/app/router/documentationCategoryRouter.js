import express from "express"; 

import documentationCategoryController from '../controller/documentationCategoryController.js';



const router = express.Router(); 

router.get('/', documentationCategoryController.getAllDocumentationCategories);
router.get('/:id(\\d+)', documentationCategoryController.getOneDocumentationCategory);
router.post('/', documentationCategoryController.createDocumentationCategory);
router.patch('/:id(\\d+)', documentationCategoryController.updateCategory);
router.delete('/:id(\\d+)', documentationCategoryController.deleteCategory);


export default router; 