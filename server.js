var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();


mongoose.connect('mongodb://localhost:27017/mongo');


var usersSchema = new Schema({
  name: String
});


mongoose.model('users', usersSchema);


app.get('/users', function(req, res) {
  mongoose.model('users').find({}, function(err, users) {
    res.send(users);
    //console.log(err);
  });
});


app.listen(3000);
