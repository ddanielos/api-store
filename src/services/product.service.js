const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class ProductService {
  constructor(){
  
  }

  async create(data){
    return data;
  }

  async find(){
    const products = await models.Product.findAll();
    return products;
  }
  
  async findOne(id){
    return {id};
  }

  async update(id, changes){
    return {id};
  }
  
  async delete(id){
    return { id };
  }
}

module.exports = ProductService;