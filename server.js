// server.js
const express = require('express');
const path = require('path');
const app = express();

const static_path = path.join(__dirname, 'build');

app.use(express.static(static_path))
  .get('*', (req, res) => {
    res.sendFile('index.html', {
      root: static_path
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${port}`);
});