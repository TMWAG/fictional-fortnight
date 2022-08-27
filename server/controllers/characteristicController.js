const {Characteristic} = require('../models/models');
const ApiError = require('../error/ApiError');

class CharacteristicController{
    async create(req, res){
        const {productId, parameterId, value} = req.body;
        const characteristic = await Characteristic.create({productId, parameterId, value});
        return res.json(characteristic);
    }

    async getAllCharsByProdId(req, res){
        const {productId} = req.params;
        const characteristics = await Characteristic.findAll({where: productId});
        return res.json(characteristics);
    }
}

module.exports = new CharacteristicController();