var express = require('express');
var stylus = require('stylus');
var ejs = require('ejs');

var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : require('./config.js').dbuser,
  password : require('./config.js').dbpassword,
  database : 'etemeurtrier'
});

connection.connect(function(err){
  if(!err) {
   console.log("Database is connected ... \n");  
  } else {
    console.log("Error connecting database : \n");
    console.log(err);
  }
});

app.use(stylus.middleware({
  src: __dirname + '/resources',
  dest: __dirname + '/public',
  compile: function (str, path) {
    return stylus(str).set('filename', path);
  },
  debug: true,
  force: true
}));

app.use('/static', express.static(__dirname + '/public/static'));

app.set('view engine', 'ejs');

render_page = function(page, response) {
  response.setHeader('Content-Type', 'text/html')
  response.render(page)
}

render_page_with_data = function(page, response, data) {
  response.setHeader('Content-Type', 'text/html')
  response.render(page, {data:data});
}

app.get('/', function(req, res){
  connection.query('SELECT * FROM Video', function(err, rows, fields){
    if (!err) {
      render_page_with_data('home', res, rows);
    } else {
      console.log('Error while performing Query.' + err);
    }
  });
    connection.end();
});

app.get('/about', function(req, res){
  render_page('about', res);
});

app.get('/contact', function(req, res){
  render_page('contact', res);
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
