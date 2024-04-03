const productsRouter = require('./products.router');

function routerApi(app){
  app.use('/api/v1/products', productsRouter);
}

module.exports = routerApi;