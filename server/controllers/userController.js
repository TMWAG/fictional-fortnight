const {User} = require('../models/models');
const ApiError = require('../error/ApiError');

class UserController {
  async registration(req, res) {
    // const {}
  }

  async login(req, res) {}

  async auth(req, res, next) {
    const {id} = req.query;
    if (!id){
      return next(ApiError.badRequest('ID is not defined'));
    }
    res.json(id);
  }
}

module.exports = new UserController();
