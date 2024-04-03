const express = require("express");
const v1Router = require('./v1/routes')

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hola mi server en express');
})

v1Router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
