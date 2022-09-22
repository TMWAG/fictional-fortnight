const Router = require('express');
const router = new Router();
const OrderController = require('../controllers/orderController');

router.get('/:id', OrderController.getOneById);
router.get('/user/:userId', OrderController.getAllByUserId);

router.put('/address', OrderController.changeAddress);
router.put('/status', OrderController.changeStatus);

router.delete('/delete', OrderController.delete);

module.exports = router;
