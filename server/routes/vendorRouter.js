const Router = require('express');
const router = new Router();
const vendorController = require('../controllers/vendorController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), vendorController.create);

router.get('/all', vendorController.getAll);

router.put(
  '/updateName',
  checkRoleMiddleware(1),
  vendorController.updateVendorNameById
);

router.delete(
  '/delete',
  checkRoleMiddleware(1),
  vendorController.deleteVendorById
);

module.exports = router;
