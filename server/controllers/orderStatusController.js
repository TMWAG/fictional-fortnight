const { OrderStatus } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderStatusController {
  async create(req, res, next) {
    const { statusName } = req.body;
    if(!statusName){
      return next(ApiError.badRequest("Не указано название статуса"));
    }
    const status = await OrderStatus.create({ statusName });
    return res.json(status);
  }

  async getAll(req, res) {
    const statuses = await OrderStatus.findAll();
    return res.json(statuses);
  }

  async getById(req, res){
    const {id} = req.params;
    if(!id){
      return next(ApiError.badRequest("Не указан ID статуса"));
    }
    const statuses = await OrderStatus.findOne({where:{id}});
    return res.json(statuses);
  }

  async update(req, res){
    const {id, statusName} = req.body;
    if(!id){
      return next(ApiError.badRequest("Не указан ID статуса"));
    }
    if(!statusName){
      return next(ApiError.badRequest("Не указано новое название статуса"));
    }
    const status = await OrderStatus.update({statusName}, {where:{id}});
    return res.json(status);
  }

  async delete(req, res, next){
    const {id} = req.body;
    if(!id){
      return next(ApiError.badRequest("Не указан ID статуса"));
    }
    const status = await OrderStatus.destroy({where:{id}});
    return res.json(status);
  }
}

module.exports = new OrderStatusController();
