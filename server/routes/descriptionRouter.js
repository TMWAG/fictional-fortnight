const Router = require('express');
const router = new Router();
const descriptionController = require('../controllers/descriptionController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), descriptionController.create);

router.get('/:productId', descriptionController.getOne);

router.put('/update', checkRoleMiddleware(1), descriptionController.update);

router.delete('/delete', checkRoleMiddleware(1), descriptionController.delete);

module.exports = router;
