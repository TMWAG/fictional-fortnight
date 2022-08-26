class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async auth(req, res) {
    res.json('test');
  }
}

module.exports = new UserController();
