const Joi = require('joi');

const id = Joi.string().uuid()


const createCategorySchema = Joi.object({
})

const updateCategorySchema = Joi.object({
})

const getCategorySchema = Joi.object({
  id: id.required()
})

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }