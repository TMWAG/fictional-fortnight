const Router = require('express');
const router = new Router();
const roleController = require('../controllers/roleController');

router.post('/create', roleController.create);

router.get('/all', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);

router.put('/update', roleController.updateById);

router.delete('/delete', roleController.deleteById);

module.exports = router;
