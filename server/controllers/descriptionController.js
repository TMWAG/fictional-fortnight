const { Description } = require('../models/models');
const ApiError = require('../error/ApiError');

class DescriptionController {
  async create(req, res, next) {
    try {
      const { productId, text } = req.body;
      const description = await Description.create({ productId, text });
      return res.json(description);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOneById(req, res, next) {
    try {
      const { productId } = req.params;
      const description = await Description.findOne({ where: { productId } });
      return res.json(description);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const descriptions = Description.findAll();
      return res.json(descriptions);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res, next) {
    try {
      const { id, text } = req.body;
      const description = await Description.update({ text }, { where: { id } });
      return res.json(description);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const description = await Description.destroy({ where: { id } });
      return res.json(description);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new DescriptionController();
