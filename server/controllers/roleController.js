const {Role} = require('../models/models');
const ApiError = require('../error/ApiError');

class RoleController{
    async create(req, res){
        const {roleName} = req.body;
        const role = await Role.create({roleName});
        return res.json(role);
    }

    async getAllRoles(req, res){
        const roles = await Role.findAll();
        return res.json(roles);
    }

    async getRoleById(req, res){
        const {id} = req.params;
        const role = await Role.findOne({where:{id}});
        return res.json(role);
    }
}

module.exports = new RoleController();