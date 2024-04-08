const express = require('express')
const router = express.Router();
const ProductsService = require('../../services/product.service')
const validatorHandler = require('../../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../../schemas/product.schema')

const service = new ProductsService();

router.get('/', async (req, res)=>{
        const products = await service.find();
        res.json(products);
})

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await service.findOne(id);
            res.json(product);
        } catch (error) {
            next(error) //Ve y ejecuta los middlewares de tipo error
        }
    }
)

router.post('/', 
  validatorHandler(createProductSchema, 'body'),
  async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201)
  res.json({
    message: "created product",
    data: newProduct
  })
})

router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'), //primero valida el id
    validatorHandler(updateProductSchema, 'body'), //luego valida el body
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product)    
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    const product = await service.delete(id);
    res.json(product)
})
module.exports = router;