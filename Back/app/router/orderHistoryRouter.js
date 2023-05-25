import express from "express"; 

import orderHistoryController from '../controller/orderHistoryController.js'; 

const router = express.Router(); 

router.get('/', orderHistoryController.getAllOrderHistories);
router.get('/:id(\\d+)', orderHistoryController.getOneOrderHistory);



export default router; 