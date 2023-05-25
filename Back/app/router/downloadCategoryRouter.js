import express from "express"; 

import downloadCategory from '../controller/downloadCategoryController.js'

const router = express.Router(); 

router.get('/', downloadCategory.getAllDownloadCategories);
router.get('/:id(\\d+)', downloadCategory.getOneDownloadCategory);
router.post('/', downloadCategory.createDownloadCategory);
router.patch('/:id(\\d+)', downloadCategory.updateCategory);
router.delete('/:id(\\d+)', downloadCategory.deleteCategory);

export default router; 