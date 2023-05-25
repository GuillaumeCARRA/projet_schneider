import express from "express"; 

import productOrderController from '../controller/productOrderController.js'; 

const router = express.Router(); 

router.get('/', productOrderController.getAllProductsOrders);
router.get('/:id(\\d+)', productOrderController.getOneProductOrder);
router.post('/', productOrderController.createProductOrder);
router.patch('/:id(\\d+)', productOrderController.updateProductOrder);
router.delete('/:id(\\d+)', productOrderController.deleteProductOrder);


export default router; 