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
  id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
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
  id: { type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true },
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

//User's connections /* где будет внешний ключ и его имя */
User.hasMany(Feedback, { foreignKey: 'user_id' });
Feedback.belongsTo(User);
User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User);

//Role's connections
Role.hasOne(User, { foreignKey: 'role_id' });
User.belongsToMany(Role);

//Product's connections
Product.hasOne(Vendor, { foreignKey: 'vendor_id' });
Vendor.belongsToMany(Product);
Product.hasOne(Category, { foreignKey: 'category_id' });
Category.belongsToMany(Product);
Product.hasMany(Description, { foreignKey: 'desc_id'});
Description.belongsToMany(Product, {through: 'prod_desc'});
Product.hasMany(Characteristic, {foreignKey: 'prod_id'});
Characteristic.belongsToMany(Product, {through: 'prod_char'});
Product.hasMany(Feedback, {foreignKey: 'prod_id'});
Feedback.belongsTo(Product);

//Parameter's connections 
Parameter.hasOne(Characteristic, {foreignKey: 'par_id'});
Characteristic.belongsTo(Parameter);

//Order's connections
Order.hasOne(OrderStatus, {foreignKey: 'order_stat_id'});
OrderStatus.belongsTo(Order);

//Ordered product's connections
OrderedProduct.hasOne(Order, {foreignKey: 'order_id'});
Order.belongsTo(OrderedProduct);
OrderedProduct.hasOne(Product, {foreignKey: 'prod_id'});
Product.belongsToMany(OrderedProduct);