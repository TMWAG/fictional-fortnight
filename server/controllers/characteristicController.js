const { Characteristic } = require('../models/models');
const ApiError = require('../error/ApiError');

class CharacteristicController {
  async create(req, res, next) {
    try {
      const { productId, parameterId, value } = req.body;
      const characteristic = await Characteristic.create({
        productId,
        parameterId,
        value,
      });
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const characteristics = await Characteristic.findAll();
      return res.json(characteristics);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOneById(req, res, next) {
    try {
      const { id } = req.params;
      const characteristic = await Characteristic.findOne({ where: { id } });
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllCharsByProdId(req, res, next) {
    try {
      const { productId } = req.params;
      const characteristics = await Characteristic.findAll({
        where: { productId },
      });
      return res.json(characteristics);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateProductById(req, res, next) {
    try {
      const { id, productId } = req.body;
      const characteristic = await Characteristic.update(
        { productId },
        { where: { id } }
      );
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateParameterById(req, res, next) {
    try {
      const { id, parameterId } = req.body;
      const characteristic = await Characteristic.update(
        { parameterId },
        { where: { id } }
      );
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateValueById(req, res, next) {
    try {
      const { id, value } = req.body;
      const characteristic = await Characteristic.update(
        { value },
        { where: { id } }
      );
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const characteristic = await Characteristic.destroy({ where: { id } });
      return res.json(characteristic);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new CharacteristicController();
