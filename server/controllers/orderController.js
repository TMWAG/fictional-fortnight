const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController {
  //utility methods
  async createNewOrder(userId) {
    let orderStatusId = process.env.DEFAULT_ORDER_STATUS_ID;
    const order = await Order.create({ userId, orderStatusId });
    return order;
  }

  async findCurrentOrder(userId) {
    let orderStatusId = process.env.DEFAULT_ORDER_STATUS_ID;
    const currentOrder = await Order.findOne({
      where: { userId, orderStatusId },
    });
    return currentOrder;
  }

  //other

  async getOneById(req, res, next) {
    try {
	    const { id } = req.params;
	    const order = await Order.findOne({ where: { id } });
	    return res.json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByUserId(req, res, next) {
    try {
	    const { userId } = req.params;
	    const orders = await Order.findAll({ where: { userId } });
	    return res.json(orders);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async changeAddressById(req, res, next) {
    try {
	    const { id, address } = req.body;
	    const order = await Order.update({ address }, { where: { id } });
	    return res.json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message)); 
    }
  }

  async changeStatusById(req, res, next) {
    try {
	    const { id, orderStatusId } = req.body;
	    const order = await Order.update({ orderStatusId }, { where: { id } });
	    return res.json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message)); 
    }
  }

  async deleteById(req, res, next) {
    try {
	    const { id } = req.body;
	    const order = await Order.destroy({ where: { id } });
	    return res.json(order);
    } catch (error) {
      next(ApiError.badRequest(error.message)); 
    }
  }
}

module.exports = new OrderController();
