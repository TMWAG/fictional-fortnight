const Router = require('express');
const router = new Router();
const characteristicController = require('../controllers/characteristicController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), characteristicController.create);

router.get('/all', characteristicController.getAll);
router.get('/:id', characteristicController.getById);
router.get('/product/:productId', characteristicController.getAllCharsByProdId);

router.put('/update', checkRoleMiddleware(1), characteristicController.update);

router.delete(
  '/delete',
  checkRoleMiddleware(1),
  characteristicController.delete
);

module.exports = router;
