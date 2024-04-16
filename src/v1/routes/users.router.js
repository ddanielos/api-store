const express = require('express')
const router = express.Router();
const UserService = require('../../services/user.service')
const validatorHandler = require('../../middlewares/validator.handler')
const { createUserSchema, updateUserSchema, getUserSchema } = require('../../schemas/user.schema')

const service = new UserService();

router.get('/', async (req, res)=>{
        const users = await service.find();
        res.json(users);
})

router.get('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = await service.findOne(id);
            res.json(user);
        } catch (error) {
            next(error) //Ve y ejecuta los middlewares de tipo error
        }
    }
)
// router.post('/', 
//   validatorHandler(createUserSchema, 'body'),
//   async (req, res)=>{
//   const body = req.body;
//   const newUser = await service.create(body)
//   res.status(201)
//   res.json({
//     message: "created user",
//     data: newUser
//   })
// })
router.post('/', 
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next)=>{
    try {
        const body = req.body;
        const newUser = await service.create(body)
        res.status(201)
        res.json({
          message: "created user",
          data: newUser
        })
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', 
    validatorHandler(getUserSchema, 'params'), //primero valida el id
    validatorHandler(updateUserSchema, 'body'), //luego valida el body
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await service.update(id, body);
        res.json(user)    
    } catch (error) {
        next(error)
    }
})

router.delete('/:id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next)=>{
    try {
        const { id } = req.params;
        const user = await service.delete(id);
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router;