const Router = require('express');
const router = new Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, feedbackController.create);

router.get('/user/:userId', feedbackController.getAllByUserId);
router.get('/product/:productId', feedbackController.getAllByProductId);

router.put('/update', authMiddleware, feedbackController.updateById);

router.delete('/delete', authMiddleware, feedbackController.deleteById);

module.exports = router;
