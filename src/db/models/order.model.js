const { Sequelize, DataTypes, Model } = require('sequelize');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
}

class Order extends Model {
  static associate(){

  }
  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: true
    }
  }
}

module.exports = { ORDER_TABLE , OrderSchema , Order }