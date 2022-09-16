const Router = require('express');
const router = new Router();
const feedbackController = require('../controllers/feedbackController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), feedbackController.create);

router.get('/user/:userId', feedbackController.getAllByUserId);
router.get('/product/:productId', feedbackController.getAllByProdId);

router.put('/update', checkRoleMiddleware(1), feedbackController.update);

router.delete('/delete', checkRoleMiddleware(1), feedbackController.delete);

module.exports = router;
