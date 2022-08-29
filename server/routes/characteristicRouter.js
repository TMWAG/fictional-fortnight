const Router = require('express');
const router = new Router();
const characteristicController = require('../controllers/characteristicController');

router.post('/create', characteristicController.create);

router.get('/all', characteristicController.getAll);
router.get('/:id', characteristicController.getById);
router.get('/product/:productId', characteristicController.getAllCharsByProdId);

router.put('/update', characteristicController.update);

router.delete('/delete', characteristicController.delete);

module.exports = router;