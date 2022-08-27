const Router = require('express');
const router = new Router();
const parameterController = require('../controllers/parameterController');

router.post('/', parameterController.create);
router.get('/', parameterController.getAll);
router.get('/:id', parameterController.getById);

module.exports = router;