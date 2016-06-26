var express = require('express');
var app = express();

// app.set('env','release_aws');
// app.set('env','development_aws');
app.set('env','development_local');
// app.set('env','development_heroku');

if('development_local' == app.get('env')){
  var host = '127.0.0.1';
  var port = 3000;
}else if('development_heroku' == app.get('env')){
  var port = process.env.PORT;
}else if('development_aws' == app.get('env')){
  var port = process.env.PORT || 8060;
}else if('release_aws' == app.get('env')){
  var port = process.env.PORT || 80;
}

var monument = require('./controllers/monument');
var bodyParser = require('body-parser');

app.set('port',process.env.PROT || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'ejs');
// app.set('view options', { layout: false });
app.use('/public',express.static( __dirname + '/public'));


app.get('/',monument.index);
app.get('/punchTime',monument.punchTime);
app.listen(port, host);

console.log("Express server listening on port %d",port);