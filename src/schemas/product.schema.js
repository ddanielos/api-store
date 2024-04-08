const Joi = require('joi');

const id = Joi.string().uuid()
const name = Joi.string().min(3).max(30)  
const price = Joi.number().integer().min(10).max(10000)
const image = Joi.string().min(10)   
const isBlock = Joi.boolean().truthy('true').falsy('false')


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image,
  isBlock: isBlock
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  isBlock: isBlock
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }