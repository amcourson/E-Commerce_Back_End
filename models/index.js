// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsToMany(Category,{
  foreignkey: 'category_id',
});
// Categories have many Products
Categories.belongToMany(Products, {
  foreignkey:'category_id',
  });
// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tags, {
  through: ProductTag,
  foreignkey: 'product_id'
  
});
// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  through: ProductTag,
  foreignkey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
