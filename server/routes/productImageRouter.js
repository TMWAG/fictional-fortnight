const Router = require('express');
const router = new Router();
const productImageController = require('../controllers/productImageController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), productImageController.create);

router.get('/:productId', productImageController.getAllByProdId);

router.delete('/delete', checkRoleMiddleware(1), productImageController.delete);

module.exports = router;
