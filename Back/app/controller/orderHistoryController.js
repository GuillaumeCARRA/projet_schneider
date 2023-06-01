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

export default {
    getAllOrderHistories, 
    getOneOrderHistory
}