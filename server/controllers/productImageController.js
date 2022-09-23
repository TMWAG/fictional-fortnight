const { ProductImage } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

class ProductImageController {
  async create(req, res, next) {
    try {
	    const { productId } = req.body;
	    const { img } = req.files;
	    let filename = uuid.v4() + '.jpg';
	    img.mv(path.resolve(__dirname, '..', 'static', filename));
	    const image = await ProductImage.create({ filename, productId });
	    return res.json(image);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByProdId(req, res, next) {
    try {
	    const { productId } = req.params;
	    const images = await ProductImage.findAll({ where: { productId } });
	    return res.json(images);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
	    const { id } = req.body;
	    const { filename } = await ProductImage.findOne({ where: { id } });
	    fs.unlink(path.resolve(__dirname, '..', 'static', filename), (err) => {
	      if (err) {
	        return next(ApiError.internal('Ошибка при удалении файла'));
	      }
	    });
	    const img = ProductImage.destroy({ where: { id } });
	    return res.json(img);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ProductImageController();
