const { OrderStatus } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderStatusController {
  async create(req, res, next) {
    try {
	    const { statusName } = req.body;
	    const status = await OrderStatus.create({ statusName });
	    return res.json(status);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
	    const statuses = await OrderStatus.findAll();
	    return res.json(statuses);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getById(req, res) {
    try {
	    const { id } = req.params;
	    const statuses = await OrderStatus.findOne({ where: { id } });
	    return res.json(statuses);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res) {
    try {
	    const { id, statusName } = req.body;
	    const status = await OrderStatus.update({ statusName }, { where: { id } });
	    return res.json(status);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
	    const { id } = req.body;
	    const status = await OrderStatus.destroy({ where: { id } });
	    return res.json(status);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new OrderStatusController();
