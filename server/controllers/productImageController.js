const {ProductImage} = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ProductImageController{
    async create(req, res){
        const {productId} = req.body;
        const {img} = req.files;
        let filename = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static', filename));
        const image = await ProductImage.create({filename, productId});
        return res.json(image);
    }

    async getAllByProdId(req, res){
        const {productId} = req.params;
        const images = ProductImage.findAll({where:{productId}});
        return res.json(images);
    }
}

module.exports = new ProductImageController();