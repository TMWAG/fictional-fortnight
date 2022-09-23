const Router = require('express');
const router = new Router();
const OrderController = require('../controllers/orderController');

router.get('/:id', OrderController.getOneById);
router.get('/user/:userId', OrderController.getAllByUserId);

router.put('/address', OrderController.changeAddressById);
router.put('/status', OrderController.changeStatusById);

router.delete('/delete', OrderController.deleteById);

module.exports = router;
