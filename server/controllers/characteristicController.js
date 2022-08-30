const { Characteristic } = require('../models/models');
const ApiError = require('../error/ApiError');

class CharacteristicController {
  async create(req, res, next) {
    const { productId, parameterId, value } = req.body;
    if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    } else if (!parameterId) {
      return next(ApiError.badRequest('Не указан ID параметра'));
    } else if (!value) {
      return next(ApiError.badRequest('Не указано значение параметра'));
    }
    const characteristic = await Characteristic.create({
      productId,
      parameterId,
      value,
    });
    return res.json(characteristic);
  }

  async getAll(req, res) {
    const characteristics = await Characteristic.findAll();
    return res.json(characteristics);
  }

  async getById(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID характеристики'));
    }
    const characteristic = await Characteristic.findOne({ where: { id } });
    return res.json(characteristic);
  }

  async getAllCharsByProdId(req, res, next) {
    const { productId } = req.params;
    if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    }
    const characteristics = await Characteristic.findAll({
      where: { productId },
    });
    return res.json(characteristics);
  }

  async update(req, res, next) {
    const { id, parameterId, value } = req.body;
    let characteristic;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID характеристики'));
    }
    if (!parameterId && value) {
      characteristic = await Characteristic.update(
        { value },
        { where: { id } }
      );
    }
    if (!value && parameterId) {
      characteristic = await Characteristic.update(
        { parameterId },
        { where: { id } }
      );
    }
    if (value && parameterId) {
      characteristic = await Characteristic.update(
        { value, parameterId },
        { where: { id } }
      );
    }
    return res.json(characteristic);
  }

  async delete(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID характеристики'));
    }
    const characteristic = await Characteristic.destroy({ where: { id } });
    return res.json(characteristic);
  }
}

module.exports = new CharacteristicController();
