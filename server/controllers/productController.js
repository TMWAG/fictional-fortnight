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
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const product = await Product.findOne({ where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
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
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByVendorId(req, res, next) {
    try {
      const { vendorId } = req.params;
      let { limit, offset } = req.query;
      const products = await Product.findAndCountAll({
        where: { vendorId },
        limit,
        offset,
      });
      return res.json(products);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByCategoryId(req, res, next) {
    try {
      const { categoryId } = req.params;
      let { limit, offset } = req.query;
      const products = await Product.findAndCountAll({
        where: { categoryId },
        limit,
        offset,
      });
      return res.json(products);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateNameByProductId(req, res, next) {
    try {
      const { id, name } = req.body;
      const product = await Product.update({ name }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updatePriceByProductId(req, res, next) {
    try {
      const { id, price } = req.body;
      const product = await Product.update({ price }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateAmountByProductId(req, res, next) {
    try {
      const { id, amount } = req.body;
      const product = await Product.update({ amount }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateDiscountByProductId(req, res, next) {
    try {
      const { id, discount } = req.body;
      const product = await Product.update({ discount }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateVendorByProductId(req, res, next) {
    try {
      const { id, vendorId } = req.body;
      const product = await Product.update({ vendorId }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateCategoryByProductId(req, res, next) {
    try {
      const { id, categoryId } = req.body;
      const product = await Product.update({ categoryId }, { where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteByProductId(req, res, next) {
    try {
      const { id } = req.body;
      const product = await Product.destroy({ where: { id } });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ProductController();
