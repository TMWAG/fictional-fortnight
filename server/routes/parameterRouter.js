const Router = require('express');
const router = new Router();
const parameterController = require('../controllers/parameterController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), parameterController.create);

router.get('/all', parameterController.getAll);
router.get('/:id', parameterController.getById);

router.put('/update', checkRoleMiddleware(1), parameterController.update);

router.delete('/delete', checkRoleMiddleware(1), parameterController.delete);

module.exports = router;
