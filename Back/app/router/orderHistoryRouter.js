import express from "express"; 

import orderHistoryController from '../controller/orderHistoryController.js'; 

const router = express.Router(); 

router.get('/', orderHistoryController.getAllOrderHistories);
router.get('/:id(\\d+)', orderHistoryController.getOneOrderHistory);
router.post('/', orderHistoryController.createOrderHistory);
router.patch('/:id(\\d+)', orderHistoryController.updateOrderHistory);
router.delete('/:id(\\d+)', orderHistoryController.deleteOrderHistory);

export default router; 