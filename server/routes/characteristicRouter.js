const Router = require('express');
const router = new Router();
const characteristicController = require('../controllers/characteristicController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), characteristicController.create);

router.get('/all', characteristicController.getAll);
router.get('/:id', characteristicController.getOneById);
router.get('/product/:productId', characteristicController.getAllCharsByProdId);

router.put(
  '/updateProduct',
  checkRoleMiddleware(1),
  characteristicController.updateProductById
);
router.put(
  '/updateParameter',
  checkRoleMiddleware(1),
  characteristicController.updateParameterById
);

router.put(
  '/updateValue',
  checkRoleMiddleware(1),
  characteristicController.updateValueById
);

router.delete(
  '/delete',
  checkRoleMiddleware(1),
  characteristicController.deleteById
);

module.exports = router;
