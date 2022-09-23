const { Vendor } = require('../models/models');
const ApiError = require('../error/ApiError');

class VendorController {
  async create(req, res, next) {
    try {
      const { vendorName } = req.body;
      const vendor = await Vendor.create({ vendorName });
      return res.json(vendor);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const vendors = await Vendor.findAll();
      return res.json(vendors);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateVendorNameById(req, res, next) {
    try {
      const { vendorName, id } = req.body;
      const vendor = await Vendor.update({ vendorName }, { where: { id } });
      return res.json(vendor);
    } catch (error) {
      next(ApiError.badRequest(error));
    }
  }

  async deleteVendorById(req, res, next) {
    try {
      const { id } = req.body;
      const vendor = Vendor.destroy({ where: { id } });
      return res.json(vendor);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new VendorController();
