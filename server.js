const express = require('express')
const app =  express()

app.listen(5000, function(err){
    if (err) 
        console.log(err);
})

app.get('/', function(req,res){
    res.send('GET request to homepage')
})

app.get('/pokemon/:id', function(req,res){
    res.send(`Pokemon # ${req.params.id}`)
})