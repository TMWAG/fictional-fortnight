const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.create);

router.get('/all', categoryController.getAll);
router.get('/:id', categoryController.getById);

router.put('/update', categoryController.update);

router.delete('/delete', categoryController.delete);

module.exports = router;
