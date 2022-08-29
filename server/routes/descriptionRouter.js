const Router = require('express');
const router = new Router();
const descriptionController = require('../controllers/descriptionController');

router.post('/create', descriptionController.create);

router.get('/:productId', descriptionController.getOne);

router.put('/update', descriptionController.update);

router.delete('/delete', descriptionController.delete);

module.exports = router;
