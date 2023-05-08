const express = require('express');
const app = express();
const port = 8080;
app.use(express.static(__dirname));

const users = [
    {user:'Laurence', pass:'password'},
    {user:'Jane',pass:'Secret'},
    {user:'Joe', pass:'pass'},
    {user:'Linda', pass:'xxxxpass'}
];


app.get('/users',function(req,res){
    res.send(users);
})

app.listen(port, function(){
    return console.log('port is'+ port);
})