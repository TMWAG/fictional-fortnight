const { OrderedProduct } = require('../models/models');
const ApiError = require('../error/ApiError');
const OrderController = require('./orderController');

class OrderedProductController {
  async createAndAddOrAddToExisted(req, res, next) {
    try {
      const userId = req.user.id;
      let currentOrder = await OrderController.findCurrentOrder(userId);
      if (!currentOrder) {
        currentOrder = await OrderController.createNewOrder(userId);
      }
      const orderId = currentOrder.id;
      const { amount, productId } = req.body;
      const orderedProduct = await OrderedProduct.create({
        orderId,
        amount,
        productId,
      });
      return res.json(orderedProduct);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByOrderId(req, res, next) {
    try {
      const { orderId } = req.params;
      const orderedProducts = await OrderedProduct.findAll({
        where: { orderId },
      });
      return res.json(orderedProducts);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async changeAmountByIdAndProductId(req, res, next) {
    try {
      const { orderId, amount, productId } = req.body;
      const orderedItems = await OrderedProduct.update(
        { amount },
        { where: { orderId, productId } }
      );
      return res.json(orderedItems);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async removeProductById(req, res, next) {
    try {
      const { orderId, productId } = req.body;
      const removed = OrderedProduct.destroy({ where: { productId, orderId } });
      return res.json(removed);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new OrderedProductController();
