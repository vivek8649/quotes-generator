const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);
