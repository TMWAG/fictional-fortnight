const { Role } = require('../models/models');
const ApiError = require('../error/ApiError');

class RoleController {
  async create(req, res, next) {
    try {
      const { roleName } = req.body;
      const role = await Role.create({ roleName });
      return res.json(role);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllRoles(req, res, next) {
    try {
      const roles = await Role.findAll();
      return res.json(roles);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getRoleById(req, res, next) {
    try {
      const { id } = req.params;
      const role = await Role.findOne({ where: { id } });
      return res.json(role);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res, next) {
    try {
      const { id, roleName } = req.body;
      const newRole = await Role.update({ roleName }, { where: { id } });
      return res.json(newRole);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const deletedRole = await Role.destroy({ where: { id } });
      return res.json(deletedRole);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new RoleController();
