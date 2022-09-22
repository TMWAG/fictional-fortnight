const { OrderedProduct } = require('../models/models');
const ApiError = require('../error/ApiError');
const OrderController = require('./orderController');

class OrderedProductController {
  async createAndAddOrAddToExisted(req, res, next) {
    const userId = req.user.id;
    let currentOrder = await OrderController.findCurrentOrder(userId);
    if(!currentOrder){
      currentOrder = await OrderController.createNewOrder(userId);
    }
    const orderId = currentOrder.id;
    const {amount, productId} = req.body;
    if(!amount){
      return next(ApiError.badRequest('Не указано количество'));
    }
    if(!productId){
      return next(ApiError.badRequest('Не указан ID товара'));
    }
    const orderedProduct = await OrderedProduct.create({orderId, amount, productId});
    return res.json(orderedProduct);
  }

  async getAllByOrderId(req, res) {
    const { orderId } = req.params;
    const orderedProducts = await OrderedProduct.findAll({
      where: { orderId },
    });
    return res.json(orderedProducts);
  }

  async changeAmount(req, res, next){
    const {orderId, amount, productId} = req.body;
    if(!orderId){
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    if(!amount){
      return next(ApiError.badRequest('Не указано количество товара'));
    }
    if(!productId){
      return next(ApiError.badRequest('Не указан ID товара'));
    }
    const orderedItems = await OrderedProduct.update({amount}, {where:{orderId, productId}});
    return res.json(orderedItems);
  }
  
  async removeProduct(req, res, next){
    const {orderId, productId} = req.body;
    if(!orderId){
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    if(!productId){
      return next(ApiError.badRequest('Не указан ID товара'));
    }
    const removed = OrderedProduct.destroy({where:{productId, orderId}});
    return res.json(removed);
  }
}

module.exports = new OrderedProductController();
