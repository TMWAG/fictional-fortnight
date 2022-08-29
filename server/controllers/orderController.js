const {Order} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController{
    async create(req, res){
        const {address, userId} = req.body;
        let orderStatusId = 1;
        const order = await Order.create({address, userId, orderStatusId});
        return res.json(order);
    }
    
    async getOneById(req, res){
        const {id} = req.params;
        const order = await Order.findOne({where:{id}});
        return res.json(order);
    }

    async getAllByUserId(req, res){
        const {userId} = req.params;
        const orders = await Order.findAll({where:{userId}});
        return res.json(orders);
    }
}

module.exports = new OrderController();