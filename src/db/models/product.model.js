const { Sequelize, DataTypes, Model } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
  }
}

class Product extends Model {
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: true
    }
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }