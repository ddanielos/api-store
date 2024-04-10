const express = require('express')
const router = express.Router();
const OrderService = require('../../services/order.service')
const validatorHandler = require('../../middlewares/validator.handler')
const { createOrderSchema, updateOrderSchema, getOrderSchema } = require('../../schemas/order.schema')

const service = new OrderService();

router.get('/', async (req, res)=>{
        const orders = await service.find();
        res.json(orders);
})

router.get('/:id',
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await service.findOne(id);
            res.json(order);
        } catch (error) {
            next(error) //Ve y ejecuta los middlewares de tipo error
        }
    }
)

router.post('/', 
  validatorHandler(createOrderSchema, 'body'),
  async (req, res)=>{
  const body = req.body;
  const newOrder = await service.create(body)
  res.status(201)
  res.json({
    message: "created order",
    data: newOrder
  })
})

router.patch('/:id', 
    validatorHandler(getOrderSchema, 'params'), //primero valida el id
    validatorHandler(updateOrderSchema, 'body'), //luego valida el body
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const order = await service.update(id, body);
        res.json(order)    
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;
    const order = await service.delete(id);
    res.json(order)
})
module.exports = router;