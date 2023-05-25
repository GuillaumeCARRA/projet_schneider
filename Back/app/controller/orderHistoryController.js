import OrderHistory from "../models/orderHistory.js";
import {} from "../models/index.js";

const getAllOrderHistories = async (req, res) => {
    try {
        const orderHistories = await OrderHistory.findAll({
            include: [
                {association: "orders"}
            ]
        });

        res.json({data: orderHistories}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
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

        res.json({data: oneOrderHistory}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

export default {
    getAllOrderHistories, 
    getOneOrderHistory
}