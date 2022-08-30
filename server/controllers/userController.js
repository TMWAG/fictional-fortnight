const { User } = require('../models/models');
const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res, next) {
    const { name, surname, patronymic, phone, email, roleId, password } =
      req.body;
  }

  async login(req, res) {}

  async auth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('ID is not defined'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
