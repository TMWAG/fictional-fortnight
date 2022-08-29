const {Category} = require('../models/models');
const ApiError = require('../error/ApiError');

class CategoryController {
  async create(req, res, next) {
    const {categoryName} = req.body;
    if(!categoryName){
      return next(ApiError.badRequest("Не задано название категории"));
    }
    const category = await Category.create({categoryName});
    return res.json(category);
  }

  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async getById(req, res, next){
    const {id} = req.params;
    if(!id){
      return next(ApiError.badRequest("Не задан ID"));
    }
    const category = await Category.findOne({where:{id}});
    return res.json(category);
  }

  async update(req, res, next){
    const {id, categoryName} = req.body;
    if(!id || !categoryName){
      return next(ApiError.badRequest("Не задан ID или название категории"));
    }
    const category = await Category.update({categoryName}, {where:{id}});
    return res.json(category);
  }

  async delete(req, res, next){
    const {id} = req.body;
    if(!id){
      return next(ApiError.badRequest("Не задан ID"));
    }
    const category = await Category.destroy({where:{id}});
    return res.json(category);
  }
}

module.exports = new CategoryController();
