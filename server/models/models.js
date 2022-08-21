const sequelize = require('../db');
const {DataTypes} = require('sequelize');



const User = sequelize.define('user', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:           {type: DataTypes.STRING, allowNull: false},
    surname:        {type: DataTypes.STRING, allowNull: false},
    patronymic:     {type: DataTypes.STRING, allowNull: false},
    phone:          {type: DataTypes.STRING, allowNull: false, unique: true},
    email:          {type: DataTypes.STRING, allowNull: false, unique:true},
    password:       {type: DataTypes.STRING, allowNull: false},
});

const Role = sequelize.define('role', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    roleName:       {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Feedback = sequelize.define('feedback', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    feedbackText:   {type: DataTypes.TEXT},
    rating:         {type: DataTypes.INTEGER, allowNull: false},
    date:           {type: DataTypes.DATE,  allowNull: false},
});

const Product = sequelize.define('product', {
    id:             {type: DataTypes.NUMBER, primaryKey:true, autoIncrement: true},
    name:           {type: DataTypes.STRING, allowNull:false, unique: true },
    price:          {type: DataTypes.INTEGER, allowNull: false},
    amount:         {type: DataTypes.INTEGER, allowNull: false},
    discount:       {type: DataTypes.INTEGER},
});

const Vendor = sequelize.define('vendor', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    vendorName:     {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Category = sequelize.define('category', {
    id:             {type: DataTypes.NUMBER, primaryKey: true, autoIncrement: true},
    categoryName:   {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Description = sequelize.define('description', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text:           {type: DataTypes.TEXT, allowNull: false},
    picture:        {type: DataTypes.STRING},
});

const Order = sequelize.define('order', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address:        {type: DataTypes.STRING, allowNull: false},
    date:           {type: DataTypes.DATE, allowNull: false},
});

const OrderStatus = sequelize.define('orderStatus', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    statusName:     {type: DataTypes.STRING, allowNull: false, unique: true},
});

const OrderedProduct = sequelize.define('orderedProduct', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    amount:         {type: DataTypes.INTEGER, allowNull: false},
})



