const { Parameter } = require('../models/models');
const ApiError = require('../error/ApiError');

class ParameterController {
  async create(req, res, next) {
    try {
      const { parameter } = req.body;
      const createdParameter = await Parameter.create({ parameter });
      return res.json(createdParameter);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const parameters = await Parameter.findAll();
      return res.json(parameters);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const parameter = await Parameter.findOne({ where: { id: id } });
      return res.json(parameter);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res, next) {
    try {
      const { id, parameter } = req.body;
      const newParameter = await Parameter.update(
        { parameter },
        { where: { id } }
      );
      return res.json(newParameter);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const parameter = await Parameter.destroy({ where: { id } });
      return res.json(parameter);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ParameterController();
