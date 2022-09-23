const Router = require('express');
const router = new Router();
const descriptionController = require('../controllers/descriptionController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), descriptionController.create);

router.get('/:productId', descriptionController.getOneById);
router.get('/all', descriptionController.getAll);

router.put('/update', checkRoleMiddleware(1), descriptionController.updateById);

router.delete(
  '/delete',
  checkRoleMiddleware(1),
  descriptionController.deleteById
);

module.exports = router;
