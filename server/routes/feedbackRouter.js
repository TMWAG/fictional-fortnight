const Router = require('express');
const router = new Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/create', feedbackController.create);

router.get('/user/:userId', feedbackController.getAllByUserId);
router.get('/product/:productId', feedbackController.getAllByProdId);

router.put('/update', feedbackController.update);

router.delete('/delete', feedbackController.delete)

module.exports = router;