const { Description } = require('../models/models');
const ApiError = require('../error/ApiError');

class DescriptionController {
  async create(req, res, next) {
    const { productId, text } = req.body;
    if (!productId || !text) {
      return next(
        ApiError.badRequest('Не указан ID продукта или текст описания')
      );
    }
    const description = await Description.create({ productId, text });
    return res.json(description);
  }

  async getOne(req, res, next) {
    const { productId } = req.params;
    if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    }
    const description = await Description.findOne({ where: { productId } });
    return res.json(description);
  }

  async update(req, res, next) {
    const { id, text } = req.body;
    if (!id || !text) {
      return next(ApiError.badRequest('Не указан ID или текст описания'));
    }
    const description = await Description.update({ text }, { where: { id } });
    return res.json(description);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }
    const description = await Description.destroy({ where: { id } });
    return res.json(description);
  }
}

module.exports = new DescriptionController();
