const route=require('express');

const indexRoute = route();

var newId=3;
const arr = [
    {
        id:1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
        id:2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


indexRoute.get('/',(req,res)=> res.render("index",{arr: arr}));

indexRoute.get('/new',(req,res)=> res.render("form"));


indexRoute.post('/new', (req, res) => {
    console.log("Form data received:", req.body);

    const { name, msg } = req.body;

    arr.push({
        id: newId++,
        text: msg,
        user: name,
        added: new Date()
    });

    // Redirect to homepage after adding the message
    res.redirect('/');
});



module.exports= indexRoute;