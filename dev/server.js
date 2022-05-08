const express = require('express')
const app =  express()
app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5001, function (err){
    if (err) 
        console.log(err);
})

// app.get('/', function(req,res){
//     res.send('GET request to homepage')
// })

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
  })


const https = require('https');


app.get('/pokemon/:id', function (req, res) {

    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    data = ""
    https.get(url, function (https_res) {
        https_res.on("data", function (chunk) {
           data += chunk
        })

        https_res.on("end", function () {
            data = JSON.parse(data)

            a  = data.stats.filter(function (obj){
                return obj.stat.name == "hp"
            }).map((obj2)=>{
                return obj2.base_stat
            })
            

            res.render("profile.ejs", {
                "id": req.params.id,
                "name": "name",
                "hp": 200, // data.stats[0].stat.name
                "attack": a[0],
                // "defense": c[2],
                // "special-attack":d[3],
                // "special-defense":e[4],
                // "speed":f[5]
                
            });
        })
    });


})


    // b  = data.stats.filter(function (obj){
    //     return obj.stat.name == "attack"
    // }).map((obj2)=>{
    //     return obj2.base_stat
    // }),

    // c  = data.stats.filter(function (obj){
    //     return obj.stat.name == "defense"
    // }).map((obj2)=>{
    //     return obj2.base_stat
    // }),

    // d  = data.stats.filter(function (obj){
    //     return obj.stat.name == "special-attack"
    // }).map((obj2)=>{
    //     return obj2.base_stat
    // }),

    // e  = data.stats.filter(function (obj){
    //     return obj.stat.name == "special-defense"
    // }).map((obj2)=>{
    //     return obj2.base_stat
    // }),

    // f  = data.stats.filter(function (obj){
    //     return obj.stat.name == "speed"
    // }).map((obj2)=>{
    //     return obj2.base_stat
    // }),

app.use(express.static('./public'));