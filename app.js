var express = require('express');
var Feed = require('rss-to-json');

var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/getRssData', function (req, res) {
    Feed.load('http://gamek.vn/'+req.query.type+'.rss', function (err, rss) {
        res.json(rss.items);
    });
})

app.listen(port, function () {
    console.log("app listen on port " + port);
})