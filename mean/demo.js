// var http = require('http');
// http.createServer(function(req, res) {
//  res.writeHead(200, {
//   'Content-Type': 'text/plain'
//  });
//  res.end('Hello World');
// }).listen(3000);
// console.log('Server running at http://localhost:3000/');


// var connect = require('connect');
// var app = connect();
// //middle ware
// var logger = function(req, res, next) {
//  console.log(req.method, req.url);
//  next();
// };
// var helloWorld = function(req, res, next) {
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Hello World');
// };
// var goodbyeWorld = function(req, res, next) {
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Goodbye World');
// };
// app.use(logger);
// app.use('/hello', helloWorld);
// app.use('/goodbye', goodbyeWorld);
// app.listen(3000);
// console.log('Server running at http://localhost:3000/');

var express = require('express');
var app = express();
app.use('/', function(req, res) {
  res.send('Hello World');
});
app.post('/', function (req, res) {
  res.send({
  "firstName": "First",
  "lastName": "Last",
  "email": "user@example.com",
  "username": "username",
  "password": "password"
});
app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;

// app.route('/').get(function(req, res) {
//  res.send('This is a GET request');
// }).post(function(req, res) {
//  res.send('This is a POST request');
// });

// var express = require('express');
// var hasName = function(req, res, next) {
//  if (req.param('name')) {
//    next();
//  } else {
//  res.send('What is your name?');
//  }
// };
// var sayHello = function(req, res, next) {
//  res.send('Hello ' + req.param('name'));
// };
// var app = express();
// app.get('/', hasName, sayHello);
// app.listen(3000);
// console.log('Server running at http://localhost:3000/');