const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  patronymic: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Role = sequelize.define('role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  roleName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Feedback = sequelize.define('feedback', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  feedbackText: { type: DataTypes.TEXT },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
});

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.INTEGER, allowNull: false },
  discount: { type: DataTypes.INTEGER },
});

const Vendor = sequelize.define('vendor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  vendorName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  categoryName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Description = sequelize.define('description', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
  picture: { type: DataTypes.STRING },
});

const Characteristic = sequelize.define('characteristic', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING, allowNull: false },
});

const Parameter = sequelize.define('parameter', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  parameter: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  address: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
});

const OrderStatus = sequelize.define('orderStatus', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  statusName: { type: DataTypes.STRING, allowNull: false, unique: true },
});

const OrderedProduct = sequelize.define('orderedProduct', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, allowNull: false },
});

//User's connections
User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Feedback);
Feedback.belongsTo(User);

//Role's connections
Role.hasMany(User);
User.belongsTo(Role);

//Order's connections
Order.hasMany(OrderedProduct);
OrderedProduct.belongsTo(Order);

//Order status connections
OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

//Product's connections
Product.hasMany(OrderedProduct);
OrderedProduct.belongsTo(Product);
Product.hasMany(Feedback);
Feedback.belongsTo(Product);
Product.hasMany(Description);
Description.belongsTo(Product);
Product.hasMany(Characteristic);
Characteristic.belongsTo(Product);

//Vendor's connections
Vendor.hasMany(Product);
Product.belongsTo(Vendor);

//Category's connections
Category.hasMany(Product);
Product.belongsTo(Category);

//Parameter's connections
Parameter.hasMany(Characteristic);
Characteristic.belongsTo(Parameter);

module.exports = {
  User,
  Role,
  Feedback,
  Product,
  Vendor,
  Category,
  Description,
  Characteristic,
  Parameter,
  Order,
  OrderStatus,
  OrderedProduct,
};
