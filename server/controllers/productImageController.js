const { ProductImage } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

class ProductImageController {
  async create(req, res, next) {
    const { productId } = req.body;
    if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    }
    const { img } = req.files;
    if (!img) {
      return next(ApiError.badRequest('Нет изображения'));
    }
    let filename = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', filename));
    const image = await ProductImage.create({ filename, productId });
    return res.json(image);
  }

  async getAllByProdId(req, res) {
    const { productId } = req.params;
    const images = await ProductImage.findAll({ where: { productId } });
    return res.json(images);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID изображения'));
    }
    const { filename } = await ProductImage.findOne({ where: { id } });
    fs.unlink(path.resolve(__dirname, '..', 'static', filename), (err) => {
      if (err) {
        return next(ApiError.internal('Ошибка при удалении файла'));
      }
    });
    const img = ProductImage.destroy({ where: { id } });
    return res.json(img);
  }
}

module.exports = new ProductImageController();
