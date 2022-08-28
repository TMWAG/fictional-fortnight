const {Feedback} = require('../models/models');
const ApiError = require('../error/ApiError');

class FeedbackController{
    async create(req, res){
        const {feedbackText, rating, userId, productId} = req.body;
        const feedback = await Feedback.create({feedbackText, rating, userId, productId});
        return res.json(feedback);
    }

    async getAllByUserId(req, res){
        const {userId} = req.params;
        const userFeedbacks = await Feedback.findAll({where:{userId}});
        return res.json(userFeedbacks);
    }

    async getAllByProdId(req, res){
        const {productId} = req.params;
        const productFeedbacks = await Feedback.findAll({where:{productId}});
        return res.json(productFeedbacks);
    }
}

module.exports = new FeedbackController();