const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor(){
  
  }

  async create(data){
    return data;
  }

  async find(){
    const orders = await models.Order.findAll();
    return orders
  }
  
  async findOne(id){
    return id;
  }

  async update(id, changes){
    return [];
  }
  
  async delete(id){
    return { id };
  }
}

module.exports = OrderService;