const Router = require('express');
const router = new Router();
const parameterController = require('../controllers/parameterController');

router.post('/create', parameterController.create);

router.get('/all', parameterController.getAll);
router.get('/:id', parameterController.getById);

router.put('/update', parameterController.update);

router.delete('/delete', parameterController.delete);

module.exports = router;