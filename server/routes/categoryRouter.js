const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), categoryController.create);

router.get('/all', categoryController.getAll);
router.get('/:id', categoryController.getById);

router.put('/update', checkRoleMiddleware(1), categoryController.update);

router.delete('/delete', checkRoleMiddleware(1), categoryController.delete);

module.exports = router;
