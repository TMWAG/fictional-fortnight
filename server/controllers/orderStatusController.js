const {OrderStatus} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderStatusController{
    async create(req, res){
        const {statusName} = req.body;
        const status = await OrderStatus.create({statusName});
        return res.json(status);
    }

    async getAll(req, res){
        const statuses = await OrderStatus.findAll();
        return res.json(statuses);
    }
}

module.exports = new OrderStatusController();