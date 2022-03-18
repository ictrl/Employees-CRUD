//dependencies
const express = require('express');
const app = express();

//application port number
const PORT =5000;

//middlewares
app.use(express.json()) //to parse body payload


//routes
app.use('/api', require('./routes'))

//start the server 
app.listen(PORT, ()=> console.log('server is running on',PORT));