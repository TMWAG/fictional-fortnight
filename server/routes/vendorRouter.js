const Router = require('express');
const router = new Router();
const vendorController = require('../controllers/vendorController');

router.post('/', vendorController.create);
router.get('/', vendorController.getAll);

module.exports = router;
