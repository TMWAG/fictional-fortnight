const {Description} = require('../models/models');
const ApiError = require('../error/ApiError');

class DescriptionController{
    async create(req, res){
        const {productId, text} = req.body;
        const description = await Description.create({productId, text});
        return res.json(description);
    }

    async getOneByProdId(req, res){
        const {productId} = req.params;
        const description = await Description.findOne({where:{productId}});
        return res.json(description);
    }
}

module.exports = new DescriptionController();