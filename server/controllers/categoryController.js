const { Category } = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
  async create(req, res, next) {
    try {
      const { categoryName } = req.body;
      const category = await Category.create({ categoryName });
      return res.json(category);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const categories = await Category.findAll();
      return res.json(categories);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOneById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ where: { id } });
      return res.json(category);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res, next) {
    try {
      const { id, categoryName } = req.body;
      const category = await Category.update(
        { categoryName },
        { where: { id } }
      );
      return res.json(category);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const category = await Category.destroy({ where: { id } });
      return res.json(category);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new CategoryController();
