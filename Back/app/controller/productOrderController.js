import ProductOrder from "../models/productOrder.js";
import {} from "../models/index.js";

const getAllProductsOrders = async (req, res) => {
    try {
        const productsOrders = await ProductOrder.findAll({
            include: [
                {association: "products"}
            ]
        });

        res.json({data: productsOrders}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneProductOrder = async (req, res) => {
    try {
        const productOrderId = req.params.id; 

        const oneProductOrder = await ProductOrder.findOne({
            where: ({id: productOrderId}), 
            include: [
                {association: "products"}
            ]
        });

        res.json({data: oneProductOrder}); 

    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const createProductOrder = async(req, res) => {
    
    const productOrderData = {
        product_order_quantity: req.body.product_order_quantity,
        product_oder_total_amount: req.body.product_oder_total_amount,
        product_order_date_purchase: req.body.product_order_date_purchase,
        product_id: req.body.product_id
    }
    
    try {

        const productOrder = await ProductOrder.create(productOrderData);

        res.status(201).json(productOrder); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}

const updateProductOrder = async(req, res) => {
    try {

        const updatedProductOrder = await ProductOrder.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedProductOrder) {
            return res.status(404).json({error: "aucune commande"}); 
        }

        const {
            product_order_quantity, 
            product_oder_total_amount, 
            product_order_date_purchase
        } = req.body

        if(product_order_quantity) {
            updatedProductOrder.product_order_quantity = product_order_quantity; 
        }
        if(product_oder_total_amount) {
            updatedProductOrder.product_oder_total_amount = product_oder_total_amount; 
        }
        if(product_order_date_purchase) {
            updatedProductOrder.product_order_date_purchase = product_order_date_purchase; 
        }
    
        await updatedProductOrder.save();

        res.json({data: updatedProductOrder});
        
    } catch (error) {
        console.log(error);

        res.status(500).json({error});
    }
}

const deleteProductOrder = async (req, res) => {
    try {
        const deletedProductOrder = await ProductOrder.findOne({
            where: {id: request.params.id}
        }); 


        if(!deletedProductOrder) {
            return res.status(404).json({error: "Aucune commande"});
        }

        await deletedProductOrder.destroy();

        res.json({data: deletedProductOrder});

    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default {
    getAllProductsOrders,
    getOneProductOrder, 
    createProductOrder, 
    updateProductOrder,
    deleteProductOrder
}