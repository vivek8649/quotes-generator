
const express = require('express');

const app = express();

app.use(express.static('./dist/quotes-generator'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/quotes-generator/' }
  );
});

app.listen(process.env.PORT || 8080);
