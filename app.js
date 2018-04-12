var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
	res.render('index.ejs');
});

app.get('/pure',function(req,res){
	res.render('pure.ejs');
});
app.get('/slider',function(req,res){
	res.render('slider.ejs');
});
app.get('/contact',function(req,res){
	res.render('contact.ejs');
});

app.get('/news',function(req,res){
	res.render('news.ejs');
});

// app.listen(3001, process.env.IP, function() {
// app.listen(3001, process.env.IP, function() {
var portSettings = process.env.PORT
// var portSettings = 3030;

app.listen(portSettings, process.env.IP, function() {
	var appConsoleMsg = 'Hemsidan startad: ';
	appConsoleMsg += process.env.IP + ':' + portSettings;
	console.log(appConsoleMsg);
});