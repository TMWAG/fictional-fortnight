const Router = require('express');
const router = new Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/', feedbackController.create);
router.get('/:userId', feedbackController.getAllByUserId);
router.get('/:productId', feedbackController.getAllByProdId);

module.exports = router;