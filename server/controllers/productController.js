const { Product } = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, amount, discount, vendorId, categoryId } = req.body;
      const product = await Product.create({
        name,
        price,
        amount,
        discount,
        vendorId,
        categoryId,
      });
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { vendorId, categoryId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 12;
    let offset = page * limit - limit;
    let products;
    if (!vendorId && !categoryId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (vendorId && !categoryId) {
      products = await Product.findAndCountAll({
        where: { vendorId },
        limit,
        offset,
      });
    }
    if (!vendorId && categoryId) {
      products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
      });
    }
    if (vendorId && categoryId) {
      products = await Product.findAndCountAll({
        where: { vendorId, categoryId },
        limit,
        offset,
      });
    }
    return res.json(products);
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id } });
      return res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductController();
