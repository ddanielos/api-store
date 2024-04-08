function logErrors(err, req, res, next){
  console.error(err),
  next(err)
}

function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })  
}

function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(err) //Si el error no es de tipo boom vaya a ejecutar un middleware de error normal
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler }