import express from "express"; 

import productController from '../controller/productController.js';

const router = express.Router(); 

router.get('/', productController.getAllProducts);
router.get('/:id(\\d+)', productController.getOneProduct);
router.post('/', productController.createProduct);
router.patch('/:id(\\d+)', productController.updateProduct);
router.delete('/:id(\\d+)', productController.deleteProduct);


export default router; 