const Router = require('express');
const router = new Router();
const OrderController = require('../controllers/orderController');

router.post('/', OrderController.create);
router.get('/:id', OrderController.getOneById);
router.get('/:userId', OrderController.getAllByUserId);

module.exports = router;