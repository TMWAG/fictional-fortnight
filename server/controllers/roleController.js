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
}

module.exports = new RoleController();
