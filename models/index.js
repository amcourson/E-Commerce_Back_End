// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongTo(Category,{
  foreignkey: 'category_id',
});
// Categories have many Products
Categories.haveMany(Products, {
  foreignkey:'category_id',
  });
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tags, {
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
