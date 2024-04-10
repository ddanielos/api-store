const { Sequelize, DataTypes, Model } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

class Category extends Model {
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: true
    }
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category }