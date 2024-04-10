const express = require('express')
const router = express.Router();
const CategoryService = require('../../services/category.service')
const validatorHandler = require('../../middlewares/validator.handler')
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../../schemas/category.schema')

const service = new CategoryService();

router.get('/', async (req, res)=>{
        const categories = await service.find();
        res.json(categories);
})

router.get('/:id',
    validatorHandler(getCategorySchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.findOne(id);
            res.json(category);
        } catch (error) {
            next(error) //Ve y ejecuta los middlewares de tipo error
        }
    }
)

router.post('/', 
  validatorHandler(createCategorySchema, 'body'),
  async (req, res)=>{
  const body = req.body;
  const newCategory = await service.create(body)
  res.status(201)
  res.json({
    message: "created category",
    data: newCategory
  })
})

router.patch('/:id', 
    validatorHandler(getCategorySchema, 'params'), //primero valida el id
    validatorHandler(updateCategorySchema, 'body'), //luego valida el body
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const category = await service.update(id, body);
        res.json(category)    
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    const category = await service.delete(id);
    res.json(category)
})
module.exports = router;