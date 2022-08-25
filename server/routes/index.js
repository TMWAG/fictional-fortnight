const Router = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');
const vendorRouter = require('./vendorRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/vendor', vendorRouter);

module.exports = router;
