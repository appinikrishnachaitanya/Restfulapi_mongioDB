const express = require('express');
const app  = express();
const port =8000;
const dbconfig  = require('./configs/dbconfig');
const mongoo = require('mongoose');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }))
 

app.use(bodyParser.json())




app.use('/',require('./routes/index'));




app.listen(port,()=>{

 console.log(`App is listenting at the ${port}`);

})

