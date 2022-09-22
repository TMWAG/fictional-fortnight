const Router = require('express');
const router = new Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, feedbackController.create);

router.get('/user/:userId', feedbackController.getAllByUserId);
router.get('/product/:productId', feedbackController.getAllByProdId);

router.put('/update', authMiddleware, feedbackController.update);

router.delete('/delete', authMiddleware, feedbackController.delete);

module.exports = router;
