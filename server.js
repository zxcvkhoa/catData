var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    response.render('cats')
})

app.get("/Bubbles", function (request, response){
    var cats_array = [
        {image: "/cat1.jpg", name: "Bubbles", age: "3", prey: ["Mice", "Birds", "Spiders"]}
    ];
    response.render('details', {cats: cats_array});
})

app.get("/Choco", function (request, response){
    var cats_array = [
        {image: "/cat2.jpg", name: "Choco", age: "4", prey: ["Birds", "Snakes", "Dogs"]}
    ];
    response.render('details', {cats: cats_array});
})

app.get("/Deedee", function (request, response){
    var cats_array = [
        {image: "/cat3.jpg", name: "Deedee", age: "1", prey: ["Twigs", "Grass", "Yarn"]}
    ];
    response.render('details', {cats: cats_array});
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})