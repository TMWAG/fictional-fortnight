const Router = require('express');
const router = new Router();
const OrderedProductController = require('../controllers/orderedProductController');

router.post('/', OrderedProductController.create);
router.get('/:orderId', OrderedProductController.getAllByOrderId);

module.exports = router;
