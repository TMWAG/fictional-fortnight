const Router = require('express');
const router = new Router();
const OrderedProductController = require('../controllers/orderedProductController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, OrderedProductController.createAndAddOrAddToExisted);

router.get('/:orderId', authMiddleware, OrderedProductController.getAllByOrderId);

router.put('/changeAmount', authMiddleware, OrderedProductController.changeAmount);

router.delete('/removeProduct', authMiddleware, OrderedProductController.removeProduct);

module.exports = router;
