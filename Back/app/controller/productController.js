import Product from "../models/product.js";
import {} from "../models/index.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {association: "orders"}
            ]
        });

       return res.json({data: products}); 
    } catch (error) {
        console.log(error);
        res.status(500).json({error}); 
    }
}

const getOneProduct = async (req, res) => {
    try {
        const productId = req.params.id; 

        const oneProduct = await Product.findOne({
            where: ({id: productId}), 
            include: [
                {association: "orders"}
            ]
        });

        if(!oneProduct) {
            return res.status(404).json({error: "pas de produit à cet id"})
        } else {
            return res.json({data: oneProduct}); 

        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error}); 
    }
}

const createProduct = async(req, res) => {
    
    const productData = {
        product_name: req.body.product_name,
        product_img: req.body.product_img,
        product_description: req.body.product_description,
        product_price: req.body.product_price
    }
    
    try {

        const product = await Product.create(productData);

        return res.status(201).json(product); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}

const updateProduct = async(req, res) => {
    try {

        const updatedProduct = await Product.findOne({
            where: {id: req.params.id}
        }); 

        if(!updatedProduct) {
            return res.status(404).json({error: "aucun produit"}); 
        }

        const {
            product_name, 
            product_img, 
            product_description,
            product_price
        } = req.body

        if(product_name) {
            updatedProduct.product_name = product_name; 
        }
        if(product_img) {
            updatedProduct.product_img = product_img; 
        }
        if(product_description) {
            updatedProduct.product_description = product_description; 
        }
        if(product_price) {
            updatedProduct.product_price = product_price; 
        }
    
        await updatedProduct.save();

        res.json({data: updatedProduct});
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({error});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOne({
            where: {id: req.params.id}
        }); 


        if(!deletedProduct) {
            return res.status(404).json({error: "Aucun produit"});
        }

        await deletedProduct.destroy();

        return res.json({data: deletedProduct});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
}

export default {
    getAllProducts,
    getOneProduct, 
    createProduct, 
    updateProduct,
    deleteProduct
}