const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./routs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`server started on part ${PORT}`)
})