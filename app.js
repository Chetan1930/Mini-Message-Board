const express=require('express');
const path = require('path');
const app= express();
const indexRoute = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRoute);


// app.use(error,req,res,next){
//     console.log("bhai kuch toh dikkat hui h ");
//     res.sent(500);
// }




app.listen(3000,()=> console.log("Server started successfully at PORT 3000"));