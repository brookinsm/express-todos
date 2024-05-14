const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const todosRouter = require ('./routes/todos');


//configuration variables
const PORT = process.env.PORT || 3000;
const app = express();

//middleware pipeline
app.use(cors());
app.use(logger('dev'));



// //routers
// // //test router 
// app.get('/', function (req, res){
//     res.json('success');
// })
app.use('/todos', todosRouter)

//requqest listening
app.listen(PORT, function() {
    console.log(`Sever running on port: ${PORT}`)
});