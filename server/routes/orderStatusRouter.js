const Router = require('express');
const router = new Router();
const OrderStatusController = require('../controllers/orderStatusController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), OrderStatusController.create);

router.get('/all', OrderStatusController.getAll);
router.get('/:id', OrderStatusController.getById);

router.put('/update', checkRoleMiddleware(1), OrderStatusController.updateById);

router.delete('/delete', checkRoleMiddleware(1), OrderStatusController.deleteById);

module.exports = router;
