const Router = require('express');
const router = new Router();
const descriptionController = require('../controllers/descriptionController');

router.post('/', descriptionController.create);
router.get('/:productId', descriptionController.getOneByProdId);

module.exports = router;
