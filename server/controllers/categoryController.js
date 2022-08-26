const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
  async create(req, res) {
    const {categoryName} = req.body;
    const category = await Category.create({categoryName});
    return res.json(category);
  }

  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }
}

module.exports = new CategoryController();
