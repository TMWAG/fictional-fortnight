const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController {
  async create(req, res, next) {
    const { address, userId } = req.body;
    if (!address) {
      return next(ApiError.badRequest('Не указан адрес'));
    }
    if (!userId) {
      return next(ApiError.badRequest('Не указан пользователь'));
    }
    let orderStatusId = 1;
    const order = await Order.create({ address, userId, orderStatusId });
    return res.json(order);
  }

  async getOneById(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    const order = await Order.findOne({ where: { id } });
    return res.json(order);
  }

  async getAllByUserId(req, res, next) {
    const { userId } = req.params;
    if (!userId) {
      return next(ApiError.badRequest('Не указан ID пользователя'));
    }
    const orders = await Order.findAll({ where: { userId } });
    return res.json(orders);
  }

  async changeAddress(req, res, next) {
    const { id, address } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    if (!address) {
      return next(ApiError.badRequest('Не указан адрес'));
    }
    const order = await Order.update({ address }, { where: { id } });
    return res.json(order);
  }

  async changeStatus(req, res, next) {
    const { id, orderStatusId } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    if (!orderStatusId) {
      return next(ApiError.badRequest('Не указан статус заказа'));
    }
    const order = await Order.update({ orderStatusId }, { where: { id } });
    return res.json(order);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID заказа'));
    }
    const order = await Order.destroy({ where: { id } });
    return res.json(order);
  }
}

module.exports = new OrderController();
