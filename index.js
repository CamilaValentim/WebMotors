const express = require("express")
const app = express()
const port = 3000


app.use(express.json());

const anuncioWebMotorsRouter = require('./router/anuncioWebMotorsRouter')


app.use('/anuncioWebMotors', anuncioWebMotorsRouter);

app.listen(port, () => console.log('ouvindo porta 3000!'))