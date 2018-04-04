var express = require('express');
var path = require('path');

var mongoose = require('mongoose');
var request = require('request');
var axios = require('axios');

var PORT = process.env.PORT || 3000;
var app = express();
var db = require('./models');

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/spotify-dj';

mongoose.connect( MONGODB_URI, err => {
	if(err) throw err;
	else console.log("Connected to mongodb");
});

app.use( express.static( path.join(__dirname, '/client/build/')));

app.get('/test', (req, res) => {
	res.send("Hello Hello heloo");
});

app.get('/users', (req,res) => {
  res.json([{
  	id: 1,
  	username: "someguy11"
  }, {
  	id: 2,
  	username: "otherguys32q"
  }]);
	// db.User.find({}).then(function(user) {
	// 	res.json(user);
	// }).catch(function(err) {
	// 	res.json(err);
	// });
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
})