const {Parameter} = require('../models/models');
const ApiError = require('../error/ApiError');

class ParameterController{
    async create(req, res, next){
        const {parameter} = req.body;
        if(!parameter){
            return next(ApiError.badRequest("Не задано название параметра"));
        }
        const createdParameter = await Parameter.create({parameter});
        return res.json(createdParameter);
    }

    async getAll(req, res){
        const parameters = await Parameter.findAll();
        return res.json(parameters);
    }

    async getById(req, res, next){
        const {id} = req.params;
        if(!id){
            return next(ApiError.badRequest("Не задан ID"));
        }
        const parameter = await Parameter.findOne({where:{id: id}});
        return res.json(parameter);
    }

    async update(req, res, next){
        const {id, parameter} = req.body;
        if(!id || !parameter){
            return next(ApiError.badRequest("Не задан ID или название параметра"));
        }
        const newParameter = await Parameter.update({parameter}, {where:{id}});
        return res.json(newParameter);
    }

    async delete(req, res, next){
        const {id} = req.body;
        if(!id){
            return next(ApiError.badRequest("Не задан ID"));
        }
        const parameter = await Parameter.destroy({where:{id}});
        return res.json(parameter);
    }
}

module.exports = new ParameterController();