const Router = require('express');
const router = new Router();
const OrderStatusController = require('../controllers/orderStatusController');

router.post('/create', OrderStatusController.create);

router.get('/all', OrderStatusController.getAll);
router.get('/:id', OrderStatusController.getById);

router.put('/update', OrderStatusController.update);

router.delete('/delete', OrderStatusController.delete);

module.exports = router;
