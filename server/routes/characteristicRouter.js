const Router = require('express');
const router = new Router();
const characteristicController = require('../controllers/characteristicController');

router.post('/', characteristicController.create);
router.get('/:id', characteristicController.getAllCharsByProdId);

module.exports = router;