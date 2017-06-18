var express = require('express')
 , fs      = require('fs')
 , http    = require('http')
 , path    = require('path');

var app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, '/Public')));

app.get('/', function(req, res) {

    var text = fs.readFileSync("index.html","utf-8")
    res.send(text);
});

app.get('/index', function(req, res) {

    var text = fs.readFileSync("index.html","utf-8")
    res.send(text);
});

http.createServer(app).listen(app.get('port'),function(){
  console.log("Listening on " + app.get('port'));
});


