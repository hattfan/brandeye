var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
	// res.sendFile('index.html');
	res.render('index.ejs');
  //It will find and locate index.html from View or Scripts
});
// app.listen(3001, process.env.IP, function() {
app.listen(3001, process.env.IP, function() {
// app.listen(process.env.PORT, process.env.IP, function() {
	var appConsoleMsg = 'YelpCamp server has started: ';
	appConsoleMsg += process.env.IP + ':' + process.env.PORT;
	console.log(appConsoleMsg);
});