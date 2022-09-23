const { Role } = require('../models/models');
const ApiError = require('../error/ApiError');

class RoleController {
  async create(req, res, next) {
    const { roleName } = req.body;
    if (!roleName) {
      return next(ApiError.badRequest('Не задано название роли'));
    }
    const role = await Role.create({ roleName });
    return res.json(role);
  }

  async getAllRoles(req, res) {
    const roles = await Role.findAll();
    return res.json(roles);
  }

  async getRoleById(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    const role = await Role.findOne({ where: { id } });
    return res.json(role);
  }

  async updateById(req, res, next) {
    const { id, roleName } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'));
    }
    if (!roleName) {
      return next(ApiError.badRequest('Не задано название роли'));
    }
    const newRole = await Role.update({ roleName }, { where: { id } });
    return res.json(newRole);
  }

  async deleteById(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }
    const deletedRole = await Role.destroy({ where: { id } });
    return res.json(deletedRole);
  }
}

module.exports = new RoleController();
