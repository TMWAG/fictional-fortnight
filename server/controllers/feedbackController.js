const { Feedback } = require('../models/models');
const ApiError = require('../error/ApiError');

class FeedbackController {
  async create(req, res, next) {
    try {
      const { feedbackText, rating, userId, productId } = req.body;
      const feedback = await Feedback.create({
        feedbackText,
        rating,
        userId,
        productId,
      });
      return res.json(feedback);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByUserId(req, res, next) {
    try {
      const { userId } = req.params;
      const userFeedbacks = await Feedback.findAll({ where: { userId } });
      return res.json(userFeedbacks);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllByProductId(req, res, next) {
    try {
      const { productId } = req.params;
      const productFeedbacks = await Feedback.findAll({ where: { productId } });
      return res.json(productFeedbacks);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async updateById(req, res, next) {
    try {
      const { id, feedbackText, rating } = req.body;
      let feedback;
      if (!feedbackText && rating) {
        feedback = await Feedback.update({ rating }, { where: { id } });
      }
      if (!rating && feedbackText) {
        feedback = await Feedback.update({ feedbackText }, { where: { id } });
      }
      if (feedbackText && rating) {
        feedback = await Feedback.update(
          { rating, feedbackText },
          { where: { id } }
        );
      }
      return res.json(feedback);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteById(req, res, next) {
    try {
      const { id } = req.body;
      const feedback = await Feedback.destroy({ where: { id } });
      return res.json(feedback);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new FeedbackController();
