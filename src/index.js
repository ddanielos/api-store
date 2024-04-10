const express = require("express");
const cors = require('cors')
const v1Router = require('./v1/routes')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

const whiteList = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://myapp.com'
]
const options = {
    origin: (origin, callback)=>{
        if(whiteList.includes(origin) || !origin){
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

app.use(cors(options))
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hola mi server en express');
})

v1Router(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})
