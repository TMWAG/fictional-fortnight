const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/create', checkRoleMiddleware(1), productController.create);

router.get('/item/:id', productController.getById);
router.get('/all', productController.getAll);
router.get('/vendor/:vendorId', productController.getAllByVendorId);
router.get('/category/:categoryId', productController.getAllByCategoryId);

router.put(
  '/updateName',
  checkRoleMiddleware(1),
  productController.updateNameByProductId
);
router.put(
  '/updatePrice',
  checkRoleMiddleware(1),
  productController.updatePriceByProductId
);
router.put(
  '/updateAmount',
  checkRoleMiddleware(1),
  productController.updateAmountByProductId
);
router.put(
  '/updateDiscount',
  checkRoleMiddleware(1),
  productController.updateDiscountByProductId
);
router.put(
  '/updateVendor',
  checkRoleMiddleware(1),
  productController.updateVendorByProductId
);
router.put(
  '/updateCategory',
  checkRoleMiddleware(1),
  productController.updateCategoryByProductId
);

router.delete(
  '/delete',
  checkRoleMiddleware(1),
  productController.deleteByProductId
);

module.exports = router;
