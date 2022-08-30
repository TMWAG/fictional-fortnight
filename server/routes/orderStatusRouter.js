const Router = require('express');
const router = new Router();
const OrderStatusController = require('../controllers/orderStatusController');

router.post('/', OrderStatusController.create);
router.get('/', OrderStatusController.getAll);

module.exports = router;
