var express = require('express');
var path = require('path');
var open = require('open');
var compression = require('compression');
var favicon = require('serve-favicon');

/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('build'));
app.use(favicon(path.join(__dirname,'assets','build','favicon.ico')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
