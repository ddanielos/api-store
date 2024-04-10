const Joi = require('joi');

const id = Joi.string().uuid()


const createOrderSchema = Joi.object({
})

const updateOrderSchema = Joi.object({
})

const getOrderSchema = Joi.object({
  id: id.required()
})

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }