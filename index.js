var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

app.set("view engine",'ejs');

var articles = [];

// app.get('/', function(req,res) {
// 	res.send("This is my root page");
// })

app.get('/articles/home', function(req,res) {

	var object = {
		articles: articles
	}
	console.log(object);
	res.render('articles/home', object);
})

app.get('/articles/new', function(req,res) {
	res.render('articles/new');
})

app.post('/articles', function(req, res) {
	articles.push(req.body);

	res.render('articles/post');
})
app.get('/articles/:id', function(req,res) {
	var index = req.params.id
	res.render('articles/id', articles[index]);
})

// app.get('/about', function(req,res) {
// 	res.send("This page is static and about the daily planet");
// })

// app.get('/contact', function(req,res) {
// 	res.send("This page is static too");
// })

app.listen(3000);