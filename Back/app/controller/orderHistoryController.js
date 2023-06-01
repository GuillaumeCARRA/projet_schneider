import OrderHistory from "../models/orderHistory.js";
import {} from "../models/index.js";

const getAllOrderHistories = async (req, res) => {
    try {
        const orderHistories = await OrderHistory.findAll({
            include: [
                {association: "orders"}
            ]
        });

        return res.json({data: orderHistories}); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const getOneOrderHistory = async (req, res) => {
    try {
        const orderHistoryId = req.params.id; 

        const oneOrderHistory = await OrderHistory.findOne({
            where: ({id: orderHistoryId}), 
            include: [
                {association: "orders"}
            ]
        });

        if(!oneOrderHistory) {
            return res.status(404).json({error: "pas d'historique à cet id"})
        } else {
            return res.json({data: oneOrderHistory}); 
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const createOrderHistory = async(req, res) => {
    const orderHistoryData =  req.body.product_order_id; 

    try {

        const orderHistory = await OrderHistory.create(orderHistoryData); 

        return res.status(201).json(orderHistory); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }

}

const updateOrderHistory = async(req, res) => {
    try {

        const updatedOrderHistory = await OrderHistory.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedOrderHistory) {
            return res.status(404).json({error: "aucun historique"}); 
        }

        const {
            product_order_id
        } = req.body

        if(product_order_id) {
            updatedOrderHistory.product_order_id = product_order_id; 
        }

        await updatedOrderHistory.save(); 
        return res.json({data: updatedOrderHistory}); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const deleteOrderHistory = async(req, res) => {
    try {
        const deletedOrderHistory = await OrderHistory.findOne({
            where: {id: req.params.id}
        }); 

        if(!deletedOrderHistory) {
            return res.status(404).json({error: "aucun historique"}); 
        }

        await deletedOrderHistory.destroy(); 
        return res.status(200).json({data: deletedOrderHistory}); 

    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

export default {
    getAllOrderHistories, 
    getOneOrderHistory,
    createOrderHistory,
    updateOrderHistory,
    deleteOrderHistory
}