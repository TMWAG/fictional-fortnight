const {OrderedProduct} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderedProductController{
    async create(req, res){
        const {amount, orderId, productId} = req.body;
        const orderedProduct = await OrderedProduct.create({amount, orderId, productId});
        return res.json(orderedProduct);
    }

    async getAllByOrderId(req, res){
        const {orderId} = req.params;
        const orderedProducts = await OrderedProduct.findAll({where:{orderId}});
        return res.json(orderedProducts);
    }
}

module.exports = new OrderedProductController();