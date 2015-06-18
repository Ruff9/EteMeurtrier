var express = require('express');
var stylus = require('stylus');
var ejs = require('ejs');

var app = express();

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

app.get('/', function(req, res){
  render_page('home', res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
