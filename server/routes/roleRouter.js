const Router = require('express');
const router = new Router();
const roleController = require('../controllers/roleController');

router.post('/create', roleController.create);

router.get('/all', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);

router.put('/update', roleController.update);

router.delete('/delete', roleController.delete);

module.exports = router;
