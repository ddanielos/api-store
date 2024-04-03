const express = require('express')
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res)=>{
    const products = [];
    const { size } = req.query;
    const numProd = size || 10;

    for(let i=0; i<numProd; i++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            Image: faker.image.url(),
        })
    }
    res.json(products);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Product2',
        price: 10
    })
})

router.post('/',(req, res)=>{
  const body = req.body;
  res.json({
    message: "created product",
    data: body
  })
})

module.exports = router;