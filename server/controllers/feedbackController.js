const { Feedback } = require('../models/models');
const ApiError = require('../error/ApiError');

class FeedbackController {
  async create(req, res, next) {
    const { feedbackText, rating, userId, productId } = req.body;
    if (!rating) {
      return next(ApiError.badRequest('Не указан рейтинг'));
    } else if (!userId) {
      return next(ApiError.badRequest('Не указан ID пользователя'));
    } else if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    }
    const feedback = await Feedback.create({
      feedbackText,
      rating,
      userId,
      productId,
    });
    return res.json(feedback);
  }

  async getAllByUserId(req, res, next) {
    const { userId } = req.params;
    if (!userId) {
      return next(ApiError.badRequest('Не указан ID пользователя'));
    }
    const userFeedbacks = await Feedback.findAll({ where: { userId } });
    return res.json(userFeedbacks);
  }

  async getAllByProductId(req, res, next) {
    const { productId } = req.params;
    if (!productId) {
      return next(ApiError.badRequest('Не указан ID продукта'));
    }
    const productFeedbacks = await Feedback.findAll({ where: { productId } });
    return res.json(productFeedbacks);
  }

  async updateById(req, res, next) {
    const { id, feedbackText, rating } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID отзыва'));
    }
    if (!feedbackText && !rating) {
      return next(ApiError.badRequest('Не указан текст отзыва и оценка'));
    }
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
  }

  async deleteById(req, res, next) {
    const { id } = req.body;
    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }
    const feedback = await Feedback.destroy({ where: { id } });
    return res.json(feedback);
  }
}

module.exports = new FeedbackController();
