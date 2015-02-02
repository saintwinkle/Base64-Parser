var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/* view engine setup */
app.set('views', './');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'));

/* GET home page */
app.get('/', function (req, res) {
  res.render('index', { title: 'Base64 Encoder / Decoder' });
});

/* POST base64 calculation */
app.post('/base64', function (req, res) {
  if (req.body.type == 'encode') {
    var result = new Buffer(req.body.text, 'utf8').toString('base64');
  } else if (req.body.type == 'decode') {
    var result = new Buffer(req.body.text, 'base64').toString('utf8');
  }
  console.log(result);
  res.send(result);
});

app.listen(3000);
