const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoryRouter = require('./categories.router');
const ordersRouter = require('./orders.router');

function routerApi(app){
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/categories', categoryRouter);
  app.use('/api/v1/orders', ordersRouter);
}

module.exports = routerApi;