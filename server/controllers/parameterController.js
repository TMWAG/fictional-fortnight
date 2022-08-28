const {Parameter} = require('../models/models');
const ApiError = require('../error/ApiError');

class ParameterController{
    async create(req, res){
        const {parameter} = req.body;
        const createdParameter = await Parameter.create({parameter});
        return res.json(createdParameter);
    }

    async getAll(req, res){
        const parameters = await Parameter.findAll();
        return res.json(parameters);
    }

    async getById(req, res){
        const {id} = req.params;
        const parameter = await Parameter.findOne({where:{id}});
        return res.json(parameter);
    }
}

module.exports = new ParameterController();