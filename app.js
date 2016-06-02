var express = require('express');
var app = express();

app.set('env','development_local');
// app.set('env','development_heroku');

if('development_local' == app.get('env')){
  var host = '127.0.0.1';
  var port = 3000;
}else if('development_heroku' == app.get('env')){
  var port = process.env.PORT;
}

var mounment = require('./controllers/mounment');
var bodyParser = require('body-parser');

app.set('port',process.env.PROT || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('view options', { layout: false });
app.use('/public',express.static( __dirname + '/public'));


app.get('/mounment',mounment.index);
app.listen(port, host);

console.log("Express server listening on port %d",port);