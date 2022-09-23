const Router = require('express');
const router = new Router();
const OrderedProductController = require('../controllers/orderedProductController');
const authMiddleware = require('../middleware/authMiddleware');

router.post(
  '/add',
  authMiddleware,
  OrderedProductController.createAndAddOrAddToExisted
);

router.get(
  '/order/:orderId',
  authMiddleware,
  OrderedProductController.getAllByOrderId
);

router.put(
  '/changeAmount',
  authMiddleware,
  OrderedProductController.changeAmountByIdAndProductId
);

router.delete(
  '/removeProduct',
  authMiddleware,
  OrderedProductController.removeProductById
);

module.exports = router;
