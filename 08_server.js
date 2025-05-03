const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Welcome to my hotel... How can i help you?');
})

app.get('/noodle', function(req, res){
    res.send('I would like to order a noodle');
})
app.get('/pizza', function(req, res){
    var pizzatype = {
        type: 'pepperoni',
        size: 'large',
        crust: 'thin'
    }
    // res.send('I would like to order a pizza');
    res.send(pizzatype);
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})